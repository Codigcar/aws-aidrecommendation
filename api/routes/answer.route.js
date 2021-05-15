const {Router} = require("express");

const AnswerRouter = function({answerController}){
    const router = Router();
    //router.get('/',foroController.getMessages.bind(foroController));
    router.post('/',answerController.answerQuestion.bind(answerController));
    router.get('/foro/:id',answerController.answersByForoId.bind(answerController));
    // router.put('/:doctorId/medicalConsultations/:medicalConsultationId',foroController.updateMessage.bind(foroController));
    //router.put('/:foroId',foroController.updateMessage.bind(foroController));
    // router.get('/:doctorId',foroController.getMessage.bind(foroController));

    return router;
}

module.exports = AnswerRouter;