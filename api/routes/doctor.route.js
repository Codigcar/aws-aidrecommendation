const {Router} = require("express");

const DoctorRouter = function({doctorController}){
    const router = Router();

    router.get('/',doctorController.getAllDoctors.bind(doctorController));

    router.get('/:doctorId/medicalConsultations',doctorController.getMessages.bind(doctorController));
    router.get('/:doctorId/acceptedMedicalConsultations',doctorController.getMessagesByDoctorId.bind(doctorController));
    router.put('/:doctorId/medicalConsultations/:medicalConsultationId',doctorController.updateMessage.bind(doctorController));
    router.put('/:doctorId/medicalConsultations/:medicalConsultationId/questions',doctorController.updateQuestionsAndObservation.bind(doctorController));

    // ranking doctors
    router.get('/rankings',doctorController.getAllDoctorsByRanking.bind(doctorController));

    router.get('/:doctorId',doctorController.getDoctorByDoctorId.bind(doctorController));
    
    return router;
}

module.exports = DoctorRouter;