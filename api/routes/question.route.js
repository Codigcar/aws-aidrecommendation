const {Router} = require("express");
const { validateFields } = require('../../middlewares/validate-fields');


const QuestionRouter = function({questionController,validateJWT}){
    const router = Router();

    router.get('/verifyTest',questionController.verifyTest.bind(questionController));
    router.get('/:patientId/medicalHistories/:medicalHistroyId/medicalConsultations/:medicalConsultationId/questions',questionController.getMessages.bind(questionController));
    router.put('/:patientId/medicalHistories/:medicalHistroyId/medicalConsultations/:medicalConsultationId/questions/:questionId',questionController.updateMessage.bind(questionController));
    router.get('/:patientId/medicalHistories/:medicalHistroyId/medicalConsultations/:medicalConsultationId/questions/:questionId',questionController.getMessages.bind(questionController));
    // router.post('/:doctorId/medicalConsultations/:medicalConsultationId/questions',questionController.writeMessage.bind(questionController));
  
    return router;
}

module.exports = QuestionRouter;