class AnswerController {

    constructor({ answerService }) {
        this._answerService = answerService;
    }


    async answerQuestion(req, res) {
        try {
            const { body } = req;
           
            const answer = await this._answerService.create(body);

            res.status(200).send({
                data: answer
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({
                data: 'No se pudo insertar la respuesta'
            })
        }
    }

    async answersByForoId(req, res) {
        try {
            const { id } = req.params;
           
            const answers = await this._answerService.findByForoId(id);

            res.status(200).send({
                data: answers
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({
                data: 'No se pudo emcontrar las respuestas'
            })
        }
    }


   

}

module.exports = AnswerController;