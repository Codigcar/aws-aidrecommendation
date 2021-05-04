class PatientController {


    constructor({ patientService, userService, medicalHistoryService, deficitService }) {
        this._patientService = patientService;
        this._userService = userService;
        this._medicalHistoryService = medicalHistoryService;
        this._deficitService = deficitService;
    }

    /*Write your all methods*/
    async verifyTest(req, res) {
        res.send({
            message: "Hellos, this is a TestPatient"
        })
    }

    async getMessages(req, res) {

        try {
            const messages = await this._patientService.getAll();
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
            const { body } = req;
            const message = await this._patientService.create(body);
            res.send({
                payload: message
            })
        } catch (err) {
            console.log(err);
            res.send({
                message: err
            })
        }
    }

    async deleteMessage(req, res) {
        try {
            const { id } = req.params;
            await this._patientService.delete(id);
            res.send({
                status: "204",
                payload: "Deleted successfully"
            })
        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }

    }

    async updateMessage(req, res) {
        console.log('updateMessage');
        try {
            const { body } = req;
            const { id } = req.params;

            const { userId }= await this._patientService.get(id);

            body.userId = userId;


            await this._patientService.update(id, body);
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
            const patient = await this._patientService.get(id);
            const user = await this._userService.get(patient.userId);
            const medicalHistory = await this._medicalHistoryService.getMedicalHistoryByPatientId(patient.id);
            const decifits = await this._deficitService.getAllDecificitsByMedicalHistorId(medicalHistory.id);

            patient.Correo = user.Correo;
            patient.Usuario = user.Usuario;
            patient.Contrasenia = user.Contrasenia;
            patient.PalabraSecreta = user.PalabraSecreta;
            patient.NumeroColegiatura = '';
            patient.Especialidad = '';
            patient.Colegiatura = '';
            patient.Deficits = decifits;

            
            if (patient) {
                return res.status(200).send({
                    data: patient
                });
            }else{
                return res.status(400).send({
                    data: "Not found the element"
                });
            }
        } catch (error) {
            console.log(error);
            res.status(400).send({
                message: 'No se pudo procesar'
            })
        }
    }

    

    
}

module.exports = PatientController;