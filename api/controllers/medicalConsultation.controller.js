var dateFormat = require("dateformat");

class MedicalConsultationController {



    constructor({ medicalConsultationService, medicalHistoryService, categoryDeseaseSymptomService, prescriptionService, questionService, patientService, doctorService }) {
        this._medicalConsultationService = medicalConsultationService;
        this._medicalHistoryService = medicalHistoryService;
        this._categoryDeseaseSymptomService = categoryDeseaseSymptomService;
        this._prescriptionService = prescriptionService;
        this._questionService = questionService;
        this._patientService = patientService;
        this._doctorService = doctorService;
    }

    /*Write your all methods*/
    async verifyTest(req, res) {
        res.send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessages(req, res) {

        const { medicalHistroyId, patientId } = req.params;

        try {
            // console.log('get');
            // const getMedicalHistories = await this._medicalHistoryService.getByForeignKeyPatientId(patientId);
            const getMedicalConsultations = await this._medicalConsultationService.getAllByMedicalConsultationId(medicalHistroyId);
            // if( getMedicalHistories.length === 0 ){
            //     return res.send({
            //         msg: 'No hay historiales medicos del paciente'
            //     })
            // }

            // const getDeficits = await this._deficitService.getByForeignKeyMedicalHistoryId(getMedicalHistories[0].id);
            
            const paciente = await this._patientService.get(patientId);
            
            // formato fecha
            for (const item of getMedicalConsultations) {
                let fecha = item.createdAt;
                let fecha_formato = dateFormat(fecha,"dd/mm/yyyy")
                item.createdAt = fecha_formato;
                item.PacienteApellido = paciente.Apellido;
                // item.PacienteId = patientId;
                const doctor = await this._doctorService.get(item.doctorId);
                item.DoctorApellido = doctor.Apellido;
            }


            res.status(200).send({
                data: getMedicalConsultations,
            })

        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'Error'
            })
        }
    }

    async writeMessage(req, res) {      
        try {
            const { body } = req;
            const { medicalHistroyId, patientId } = req.params;
            const  { dolencias }  = body;
            const dolenciasList = dolencias;
            const list = [];
            let listEnfermedades = [];
            let datas;

            console.log('----------------');

            for (const symptom of dolenciasList) {
                list.push(symptom['Nombre']);
            }

            for (const iterator of list) {
                datas = await this._categoryDeseaseSymptomService.getModelCategoryDeseaseSymptomBySymptomName(iterator);
                // unir todos los json en un solo
                listEnfermedades.push.apply(listEnfermedades,datas); 
            }
            console.log(listEnfermedades);

            
            let sumList = [];
            for (let i = 1; i <= 14; i++) {
                let sumaPesos = 0.0;
                for (const item of listEnfermedades) {
                    if(item.categoryDeseaseId === i){
                        sumaPesos += item.peso;
                    }
                }
                sumList[i-1] = sumaPesos;
            }
            console.log(sumList);

            let max = 0.0;
            let categoryDeseaseIdMax = 0;
            for (let i = 0; i < sumList.length; i++) {
                if(sumList[i] > max){
                    max = sumList[i];
                    categoryDeseaseIdMax = i+1;
                }
            }

            console.log('posicion del maX: ',categoryDeseaseIdMax);
            const { CategoryDesease } = await this._categoryDeseaseSymptomService.getModelCategoryDeseaseSymptomBycategoryDeseaseId(categoryDeseaseIdMax)
            console.log('enfermedad:',CategoryDesease);

            // ------------------------------------------Obtener las prescripciones

            // Obteniendo prescripciones
            const Prescription = await this._prescriptionService.getPrescriptionByDiseaseName(CategoryDesease);
            
            // console.log(Prescription[0].Prescription);
            console.log(Prescription.length);
            let prescriptionsList = [];
            for (const itemJson of Prescription) {
                prescriptionsList.push(itemJson.Prescription);
            }

        // ------------------------------------------M

            const questions = await this._questionService.getQuestionByMedicalConsultationId(1);
            // console.log(questions);

            // ------------------------------------------MODEL
            const modelMedicalHistory = {};
            modelMedicalHistory.Dolencia = CategoryDesease;
            modelMedicalHistory.doctorId = 1;
            modelMedicalHistory.DoctorName = '';

            modelMedicalHistory.Prescripcion = prescriptionsList.toString();
            modelMedicalHistory.Observaciones = '';
            modelMedicalHistory.medicalHistoryId = medicalHistroyId;
            // modelMedicalHistory.Preguntas = questions ;
            // ---
            // modelMedicalHistory.Preguntas = questions;


            // asignando nombre del paciente
            modelMedicalHistory.PacienteId = patientId;
            const paciente = await this._patientService.get(patientId);
            modelMedicalHistory.Paciente = paciente.Nombre;
            modelMedicalHistory.Nombre = paciente.Nombre;
            modelMedicalHistory.PacienteApellido = paciente.Apellido;
            modelMedicalHistory.Puntuacion = -1;

            // save en la BD
            const message = await this._medicalConsultationService.create(modelMedicalHistory);

            // formato fecha
            let fecha = message.createdAt;
            let fecha_formato = dateFormat(fecha,"dd/mm/yyyy")
            message.createdAt = fecha_formato;
            // 

            console.log(message.id);
            let questionNew = {};
            questionNew.medicalConsultationId = message.id;

            res.status(200).send({
                data: message,
                preguntas: questions
            })

        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'Error al ingresar consulta medica'
            })
        }
    }

    async getMessage(req, res) {
        try {
            const {/* patientId, */ id } = req.params;
            const medicalConsultation = await this._medicalConsultationService.get(id);

            const questions = await this._questionService.getQuestionByMedicalConsultationId(id);

            let fecha = medicalConsultation.createdAt;
            let fecha_formato = dateFormat(fecha,"dd/mm/yyyy")
            medicalConsultation.createdAt = fecha_formato;

            let paciente = await this._patientService.get(medicalConsultation.PacienteId);
            let doctor = await this._doctorService.get(medicalConsultation.doctorId);

            // console.log(paciente.Apellido);
            // console.log(doctor.Apellido);

            medicalConsultation.PacienteApellido = paciente.Apellido;

            medicalConsultation.DoctorApellido = doctor.Apellido;

            if (medicalConsultation) {
                medicalConsultation.Preguntas = questions;
                return res.status(200).send({
                    data: medicalConsultation,
                });
            }else{
                return res.status(400).send({
                    data: "Not found the element"
                });
            }

        } catch (error) {
            console.log(error);
            res.status(400).send({
                message: 'No se pudo traer el elemento'
            })
        }
    }

    async writeQuestion(req, res) {
        try {
            const { body } = req;
            const { medicalConsultationId } = req.params;
            const message = await this._questionService.getQuestionByMedicalConsultationId(medicalConsultationId);

            
            if (message) {
                return res.status(200).send({
                    data: message,
                });
            }else{
                return res.status(400).send({
                    data: "Not found the element"
                });
            }

        } catch (error) {
            console.log(error);
            res.status(400).send({
                message: 'No se pudo traer el elemento'
            })
        }
    }

     async deleteMessage(req, res) {
        try {
            const { id } = req.params;
            await this._medicalConsultationService.delete(id);
            res.status(200).send({
                data: "Deleted successfully"
            })
        } catch (error) {
            console.log(error);
            res.status(404).send({
                message: 'No se pudo eliminar'
            })
        }
    }

    async updateQuestion(req, res) {
        try {
            const { body } = req;
            const { id, c,medicalConsultationId } = req.params;

            let listQuestions = [];
            listQuestions = body.Preguntas;
            
            let getMedicalConsultation = await this._medicalConsultationService.get(medicalConsultationId);
            let getQuestions = await this._questionService.getQuestionByMedicalConsultationId(getMedicalConsultation.id)

            // console.log(getQuestions);
            for (let i = 0; i < listQuestions.length; i++) {
                getQuestions[i].respuesta = listQuestions[i]['respuesta']
                await this._questionService.update(getQuestions[i].id, getQuestions[i]);
            }

            // Actualiza estado a finalizado
            // if( body.Estado === 2 ){
            //     await this._medicalConsultationService.update(medicalHistoryId, body);
            // }

            res.status(200).send({
                data: "Updated successfully"
            })

        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'No se pudo actualizar'
            })
        }
    }

    async endConsultation(req, res) {
        try {
            const { body } = req;
            const { patientId, medicalHistoryId, medicalConsultationId } = req.params;

            const { Preguntas, DoctorApellido, createdAt, ...medicalHBody  } = req.body;

            console.log(medicalHBody);
             await this._medicalConsultationService.update(medicalConsultationId, medicalHBody);

            res.status(200).send({
                data: "Updated successfully"
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'No se pudo actualizar'
            })
        }
    }
    
}

module.exports = MedicalConsultationController;