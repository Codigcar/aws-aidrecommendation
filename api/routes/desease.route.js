const {Router} = require("express");

const DoctorRouter = function({deseaseController}){
    const router = Router();

    // router.get('/verifyTest',deseaseController.verifyTest.bind(deseaseController));
    router.get('/deseases',deseaseController.getMessages.bind(deseaseController));
    // router.post('/:categoryDeseaseId/deseases',deseaseController.writeMessage.bind(deseaseController));
    // router.delete('/:id',deseaseController.deleteMessage.bind(deseaseController));
    // router.put('/:id',deseaseController.updateMessage.bind(deseaseController));
    router.get('/:categoryDeseaseId/deseases',deseaseController.getMessage.bind(deseaseController));

    return router;
}

module.exports = DoctorRouter;