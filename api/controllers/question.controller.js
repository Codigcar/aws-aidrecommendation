class QuestionController {


    constructor({ questionService }) {
        this._questionService = questionService;
    }

    /*Write your all methods*/
    async verifyTest(req, res) {
        res.send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessages(req, res) {

        const { medicalConsultationId,questionId } = req.params;

        try {
            const messages = await this._questionService.getQuestionByMedicalConsultationId(medicalConsultationId);
            res.status(200).send({
                data: messages,
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'No se pudo listar las preguntas'
            })
        }
    }

    // async writeMessage(req, res) {
    //      try {
    //         const { body } = req;
    //         // const message = await this._doctorService.create(body);
            
    //         const { medicalConsultationId, doctorId } = req.params;

    //         // const getMedicalConsultation = await this._medicalConsultationService.get(medicalConsultationId);
    //         // const getQuestion = await this._questionService.getQuestionByMedicalConsultationId(medicalConsultationId);

    //         body.medicalConsultationId = medicalConsultationId;
    //         const createdQuestion = await this._questionService.create(body)

            

    //         res.status(200).send({
    //             data: createdQuestion
    //         })
    //     } catch (err) {
    //         console.log(err);
    //         res.status(404).send({
    //             message: 'No se pudo crear'
    //         })
    //     }
    // }

    // async deleteMessage(req, res) {
    //     try {
    //         const { id } = req.params;
    //         await this._patientService.delete(id);
    //         res.send({
    //             status: "204",
    //             payload: "Deleted successfully"
    //         })
    //     } catch (error) {
    //         res.send({
    //             status: "404",
    //             message: error
    //         })
    //     }

    // }

    async updateMessage(req, res) {
       
        try {
            const { body } = req;
            const { medicalConsultationId, questionId } = req.params;
            const message = await this._questionService.get(questionId);
            message.respuesta = body.respuesta;
            await this._questionService.update(questionId, message);

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

    async getMessage(req, res) {
        try {
            const { id } = req.params;
            const message = await this._patientService.get(id);
            if (message) {
                return res.send({
                    status: "200",
                    payload: message
                });
            }else{
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
}

module.exports = QuestionController;