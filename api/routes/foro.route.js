const {Router} = require("express");

const ForoRouter = function({foroController}){
    const router = Router();
    router.get('/',foroController.getMessages.bind(foroController));
    router.post('/foro',foroController.writeMessage.bind(foroController));
    // router.get('/:doctorId/acceptedMedicalConsultations',foroController.getMessagesByDoctorId.bind(foroController));
    // router.put('/:doctorId/medicalConsultations/:medicalConsultationId',foroController.updateMessage.bind(foroController));
    router.put('/:foroId',foroController.updateMessage.bind(foroController));
    // router.get('/:doctorId',foroController.getMessage.bind(foroController));

    return router;
}

module.exports = ForoRouter;