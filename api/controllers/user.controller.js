
const { generarJWT } = require('../../helpers/generarJWT');
const jwt = require('jsonwebtoken');

class UserController {


    constructor({ userService, patientService, doctorService, medicalHistoryService }) {
        this._userService = userService;
        this._patientService = patientService;
        this._doctorService = doctorService;
        this._medicalHistoryService = medicalHistoryService;
    }

    async verifyTest(req, res) {
        res.send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessages(req, res) {

        try {
            const messages = await this._userService.getAll();
            res.send({
                status: "200",
                payload: messages
            })
        } catch (err) {
            res.send({
                status: "404",
                message: err
            })
        }
    }

    async writeMessage(req, res) {
        try {
            const { Correo, Usuario, Contrasenia, Rol, PalabraSecreta, ...dataModel } = req.body;
            const count = await this._userService.getUserByKeyWord(PalabraSecreta);
            if (count > 0) {
                res.status(200).send({
                    message: 'Ya hay un usuario con esa palabra secreta'
                })
            } else {

                const userCreated = await this._userService.create({ Correo, Usuario, Contrasenia, Rol, PalabraSecreta });

                dataModel.userId = userCreated.id;

                var modelCreated = '';

                if (Rol === 1) {
                    modelCreated = await this._patientService.create(dataModel)
                    await this._medicalHistoryService.create({ patientId: modelCreated.id });
                }
                else {
                    modelCreated = await this._doctorService.create(dataModel);
                }

                // crear historialMedico x default
                res.status(200).send({
                    user: userCreated,
                    modelCreated,
                })
            }


        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'No se pudo crear usuario'
            })
        }
    }

    async deleteMessage(req, res) {
        try {
            const { id } = req.params;
            await this._userService.delete(id);
            res.status(200).send({
                payload: "Deleted successfully"
            })
        } catch (error) {
            console.log(error);
            res.status(400).send({
                message: 'No se pudo eliminar'
            })
        }

    }

    async updateMessage(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;

            await this._userService.update(id, body);
            res.send({
                status: "204",
                payload: "Updated successfully"
            })

        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }

    async getMessage(req, res) {
        try {
            const { id } = req.params;
            const message = await this._userService.get(id);
            if (message) {
                return res.send({
                    status: "200",
                    payload: message
                });
            } else {
                return res.send({
                    status: "404",
                    payload: "Not found the element"
                });
            }

        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }

    async getIdByToken(req, res) {
        console.log('TOKEN');
        try {
            const { token } = req.params;

            const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
            let patientOdoctor = '';
            patientOdoctor = await this._patientService.getByForeignKeyUserId(uid);
            if (!patientOdoctor) {
                patientOdoctor = await this._doctorService.getByForeignKeyUserId(uid);
            }

            const user = await this._userService.get(patientOdoctor.userId);

            user.patientOdoctor = patientOdoctor


            res.send({
                // patientOdoctor,
                user
            })

        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }

    async getPatientODoctorByUserId(req, res) {
        try {
            const { userId } = req.params;
            const user = await this._userService.get(userId);
            let patientOdoctor = {};
            if (user.Rol === 1) {
                patientOdoctor = await this._patientService.getIdPatientDoctorByIdUser(userId);
                patientOdoctor.Especialidad = '';
                patientOdoctor.Colegiatura = '';
                patientOdoctor.Correo = user.Correo;
                patientOdoctor.Contrasenia = user.Contrasenia;
                patientOdoctor.PalabraSecreta = user.PalabraSecreta;
                patientOdoctor.Usuario = user.Usuario;
                patientOdoctor.Rol = user.Rol;
            } else if (user.Rol === 2) {
                patientOdoctor = await this._doctorService.getIdPatientDoctorByIdUser(userId);
                patientOdoctor.Correo = user.Correo;
                patientOdoctor.Contrasenia = user.Contrasenia;
                patientOdoctor.PalabraSecreta = user.PalabraSecreta;
                patientOdoctor.Usuario = user.Usuario;
                patientOdoctor.Rol = user.Rol;
            }
            if (patientOdoctor) {
                return res.status(200).send({
                    data: patientOdoctor
                });
            } else {
                return res.status(400).send({
                    data: "Usuario no encontrado"
                });
            }

        } catch (error) {
            console.log(error);
            res.status(404).send({
                message: 'No se pudo procesar la petición'
            })
        }
    }

    async updateUsuarioPatientODoctor(req, res) {
        try {
            // const { body } = req;
            const { userId } = req.params;

            const user = await this._userService.get(userId);
            if (user.Rol === 1) {
                const { Usuario, Correo, Contrasenia, PalabraSecreta, Rol, ...patient } = req.body;
                const patientOdoctor = await this._patientService.getIdPatientDoctorByIdUser(user.id);
                patient.userId = user.id;
                await this._patientService.update(patientOdoctor.id, patient);
                await this._userService.update(user.id, { Usuario, Correo, Contrasenia, PalabraSecreta, Rol });
            } else if (user.Rol === 2) {
                const { Usuario, Correo, Contrasenia, PalabraSecreta, Rol, ...doctor } = req.body;
                const patientOdoctor = await this._doctorService.getIdPatientDoctorByIdUser(user.id);
                doctor.userId = user.id;
                await this._doctorService.update(patientOdoctor.id, doctor);
                await this._userService.update(user.id, { Usuario, Correo, Contrasenia, PalabraSecreta, Rol });
            }

            res.status(200).send({
                payload: "Updated successfully"
            })

        } catch (error) {
            console.log(error);
            res.status(400).send({
                message: 'No se pudo actualizar'
            })
        }
    }


    async getPasswordByKeyWord(req, res) {
        try {
            // const { userId } = req.params;
            const { body } = req;

            //const count = await this._userService.getUserByKeyWord(body.PalabraSecreta);


            const user = await this._userService.getPasswordByKeyWord(body.PalabraSecreta);

            if (user) {
                return res.status(200).send({
                    data: user.Contrasenia
                });
            } else {
                return res.status(400).send({
                    data: "Usuario no encontrado"
                });
            }

        } catch (error) {
            console.log(error);
            res.status(404).send({
                message: 'No se pudo procesar la petición'
            })
        }
    }

}

module.exports = UserController;