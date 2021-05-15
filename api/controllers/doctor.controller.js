var dateFormat = require("dateformat");

class DoctorController {


    constructor({ doctorService, medicalConsultationService, questionService, userService }) {
        this._doctorService = doctorService;
        this._medicalConsultationService = medicalConsultationService;
        this._questionService = questionService;
        this._userService = userService;


    }

    /*Write your all methods*/
    async verifyTest(req, res) {
        res.send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessagesByDoctorId(req, res){

        try {

            const {doctorId} = req.params;
            const messages = await this._medicalConsultationService.getAllMedicalConsultationsByDoctorId(doctorId);

            for (const item of messages) {
                let fecha = item.createdAt;
                let fecha_formato = dateFormat(fecha,"dd/mm/yyyy")
                item.createdAt = fecha_formato;
            }

            res.status(200).send({
                data: messages
            })
        } catch (err) {
            console.log(err);
            res.status(404).send({
                message: 'Error al listar los elementos'
            })
        }
    }

    async getMessages(req, res) {

        try {
            const messages = await this._medicalConsultationService.getAllMedicalConsultationsByEstadoConsulta(0);

            for (const item of messages) {
                let fecha = item.createdAt;
                let fecha_formato = dateFormat(fecha,"dd/mm/yyyy")
                item.createdAt = fecha_formato;
            }

            res.status(200).send({
                data: messages
            })
        } catch (err) {
            console.log(err);
            res.status(404).send({
                message: 'Error al listar los elementos'
            })
        }
    }
    
    async getAllDoctors(req, res) {

        try {
            const messages = await this._doctorService.getAll();
            res.send({
                status: "200",
                data: messages
            })
        } catch (err) {
            res.send({
                status: "404",
                message: err
            })
        }
    }
    async getAllDoctorsByRanking(req, res) {
        // console.log('hola');
        try {

            const AllMedicalConsultations = await this._medicalConsultationService.getAll();
            const AllDoctors = await this._doctorService.getAll();
            // console.log(AllMedicalConsultations);
            // console.log(AllDoctors);

            for (const iteratorDoctor of AllDoctors) {
                    let sum = 0;
                    let cont = 0;
                for (const iteratorMedicalConsultation of AllMedicalConsultations) {
                    if( iteratorMedicalConsultation.Puntuacion !== -1){
                        if( iteratorMedicalConsultation.doctorId === iteratorDoctor.id){
                            sum += iteratorMedicalConsultation.Puntuacion;
                            cont++;
                        }
                    } 
                }
                // if( iteratorMedicalConsultation.Puntuacion !== -1){
                    sum = sum/cont;
                    iteratorDoctor.PromedioPuntuacion = sum;
                    await this._doctorService.update(iteratorDoctor.id,iteratorDoctor);
                // }    
            }

            // if( AllMedicalConsultations.length !== 0){
            //     for (let index = 0; index < AllMedicalConsultations.length; index++) {
            //         let sum = 0;
            //         let cont = 0;
            //         for (const iterator of AllMedicalConsultations) {
            //             if( iterator.Puntuacion !== -1){
            //                 if(iterator.doctorId === index){
            //                     sum += iterator.Puntuacion;
            //                     cont++;
            //                 }
            //                 sum = sum/cont;
            //                 await this._doctorService.update(iterator.doctorId,sum);
            //             }
            //         }
            //     }
            // }

            const doctors = await this._doctorService.getAll();
            const consultations = await this._medicalConsultationService.getAll();
            console.log(AllMedicalConsultations)

            for (const iteratorDoctor of doctors) {
                iteratorDoctor.consultas = 0;
                for (const consultation of consultations) {
                    if( consultation.doctorId === iteratorDoctor.id){
                         iteratorDoctor.consultas = iteratorDoctor.consultas + 1;
                    }
                    
                }
            }

            res.status(200).send({
                data: doctors
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'No se pudo sacar el promedio'
            })
        }
    }
    


    async writeMessage(req, res) {
        try {
            const { body } = req;
            
            const { medicalConsultationId, doctorId } = req.params;

            body.medicalConsultationId = medicalConsultationId;
            const createdQuestion = await this._questionService.create(body)

            res.status(200).send({
                data: createdQuestion
            })
        } catch (err) {
            console.log(err);
            res.status(404).send({
                message: 'No se pudo crear'
            })
        }
    }

   


    async deleteMessage(req, res) {
        try {
            const { id } = req.params;
            await this._doctorService.delete(id);
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
        try {
            // const { body } = req;
            const { medicalConsultationId, doctorId } = req.params;
            
            const getDoctor = await this._doctorService.get(doctorId);
            const getMedicalConsultation = await this._medicalConsultationService.get(medicalConsultationId);
            getMedicalConsultation.doctorId = doctorId;
            getMedicalConsultation.DoctorName = getDoctor.Nombre;
            getMedicalConsultation.DoctorApellido = getDoctor.Apellido;
            getMedicalConsultation.Estado = 1;

            await this._medicalConsultationService.update(medicalConsultationId, getMedicalConsultation);
            res.send({
                payload: "Updated successfully"
            })

        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'No se pudo actualizar el elemento'
            })
        }
    }

    async getDoctorByDoctorId(req, res) {
        try {
            const { doctorId } = req.params;
            const doctor = await this._doctorService.get(doctorId);

            const user = await this._userService.get(doctor.userId);

            doctor.Correo = user.Correo;
            doctor.Usuario = user.Usuario;
            doctor.Contrasenia = user.Contrasenia;
            doctor.PalabraSecreta = user.PalabraSecreta;

            if (doctor) {
                return res.status(200).send({
                    data: doctor
                });
            }else{
                return res.status(404).send({
                    data: "Not found the element"
                });
            }
        } catch (error) {
            console.log(error);
            res.status(400).send({
                data: 'No se pudo ejecutar la acción'
            })
        }
    }

    async updateQuestionsAndObservation(req, res) {
        try {
            const { body } = req;
            const { medicalConsultationId } = req.params;

            let listQuestions = [];
            listQuestions = body.Preguntas; // 3 


            //Actualizar el atributo "observación"
            let getMedicalConsultation = await this._medicalConsultationService.get(medicalConsultationId);
            getMedicalConsultation.Observaciones = body.Observaciones;
            await this._medicalConsultationService.update(getMedicalConsultation.id, getMedicalConsultation);
            
            let getQuestions = await this._questionService.getQuestionByMedicalConsultationId(getMedicalConsultation.id) // 2

            // creando las preguntas
            let questions = {};
            let questions2 = {};
            // Validando que no ingrese las mismas pregutnas
            if( getQuestions.length === 0 ){  
                for (let i = 0; i < listQuestions.length; i++) {
                    questions.pregunta = listQuestions[i]['pregunta']
                    questions.medicalConsultationId = medicalConsultationId;
                    await this._questionService.create(questions);
                }
            }
            else {
                // for (let i = 0; i < listQuestions.length; i++) {
                //     if(getQuestions[i]['pregunta'] !== listQuestions[i]['pregunta']){
                //         questions.pregunta = listQuestions[i]['pregunta']
                //         questions.medicalConsultationId = medicalConsultationId;
                //         await this._questionService.create(questions);
                //     }
                // }
                for (let i = 0; i < listQuestions.length; i++) {
                    // if(getQuestions[i]['pregunta'] !== listQuestions[i]['pregunta']){
                    //     questions.pregunta = listQuestions[i]['pregunta']
                    //     questions.medicalConsultationId = medicalConsultationId;
                    //     await this._questionService.createdw(questions);
                    // }
                    if( !getQuestions[i] ){
                        questions.pregunta = listQuestions[i]['pregunta'];
                        questions.medicalConsultationId = medicalConsultationId;
                        await this._questionService.create(questions);
                    }
                }
            }
            

            // console.log(body.Observaciones);

            // if(!question){
            //     for (let i = 0; i < listQuestions.length; i++) {
            //         question[i].pregunta = listQuestions[i]['pregunta']
            //         await this._questionService.create(question[i]);
            //     }
            // } 
            // else {
                // for (let i = 0; i < listQuestions.length; i++) {
                //     question[i].pregunta = listQuestions[i]['pregunta']
                //     await this._questionService.update(question[i].id, question[i]);
                // }
            // }


            res.status(200).send({
                message: 'Ingreso y actualizacion existosa'
            })


        } catch (err) {
            console.log(err);
            res.status(404).send({
                message: 'No se pudo actualizar'
            }) 
        }
    }
}

module.exports = DoctorController;