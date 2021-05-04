const {Router} = require("express");

const DoctorRouter = function({prescriptionController}){
    const router = Router();

    router.get('/verifyTest',prescriptionController.verifyTest.bind(prescriptionController));
    router.get('/',prescriptionController.getMessages.bind(prescriptionController));
    router.post('/',prescriptionController.writeMessage.bind(prescriptionController));
    router.delete('/:id',prescriptionController.deleteMessage.bind(prescriptionController));
    router.put('/:id',prescriptionController.updateMessage.bind(prescriptionController));
    router.get('/:id',prescriptionController.getMessage.bind(prescriptionController));

    return router;
}

module.exports = DoctorRouter;