const {Router} = require("express");
const { validateFields } = require('../../middlewares/validate-fields');
const { check } = require("express-validator");


const MedicalConsultationRouter = function({medicalConsultationController,validateJWT}){
    const router = Router();

    router.get('/:patientId/medicalHistories/:medicalHistroyId/medicalConsultations/verifyTest',medicalConsultationController.verifyTest.bind(medicalConsultationController));
    
    router.get('/:patientId/medicalHistories/:medicalHistroyId/medicalConsultations',[
        // validateJWT.validateJWTMetodo.bind(validateJWT),
        // validateFields
    ],medicalConsultationController.getMessages.bind(medicalConsultationController));
    
    router.delete('/:patientId/medicalHistories/:medicalHistroyId/medicalConsultations/:id',[
    //     validateJWT.validateJWTMetodo.bind(validateJWT),
    //     validateFields
    ],medicalConsultationController.deleteMessage.bind(medicalConsultationController));
    
    router.post('/:patientId/medicalHistories/:medicalHistroyId/medicalConsultations',medicalConsultationController.writeMessage.bind(medicalConsultationController));
    // router.put('/:patientId/medicalHistories/:medicalHistroyId/medicalConsultations/:medicalConsultationId/questions',medicalConsultationController.writeQuestion.bind(medicalConsultationController));

    router.put('/:patientId/medicalHistories/:medicalHistoryId/medicalConsultations/:medicalConsultationId/questions',medicalConsultationController.updateQuestion.bind(medicalConsultationController));
    
    router.get('/:patientId/medicalHistories/:medicalHistroyId/medicalConsultations/:id',[
        // validateJWT.validateJWTMetodo.bind(validateJWT),
        // validateFields
    ],medicalConsultationController.getMessage.bind(medicalConsultationController));

    // paciente finaliza consulta
    router.put('/:patientId/medicalHistories/:medicalHistoryId/medicalConsultations/:medicalConsultationId',medicalConsultationController.endConsultation.bind(medicalConsultationController));

    return router;
}

module.exports = MedicalConsultationRouter;