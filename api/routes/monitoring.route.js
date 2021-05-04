const {Router} = require("express");
const { validateFields } = require('../../middlewares/validate-fields');


const MonitoringRouter = function({monitoringController,validateJWT}){
    const router = Router();

    router.get('/verifyTest',monitoringController.verifyTest.bind(monitoringController));
    router.get('/monitorings',monitoringController.getMessages.bind(monitoringController));
    // router.post('/',monitoringController.writeMessage.bind(monitoringController));
    // router.delete('/:id',monitoringController.deleteMessage.bind(monitoringController));
    // router.put('/:id',monitoringController.updateMessage.bind(monitoringController));
    // router.get('/:id',monitoringController.getMessage.bind(monitoringController));

    return router;
}

module.exports = MonitoringRouter;