const {Router} = require("express");

const SymptomRouter = function({symptomController}){
    const router = Router();

    // router.get('/verifyTest',SymptomController.verifyTest.bind(SymptomController));
    router.get('/',symptomController.getMessages.bind(symptomController));
    // router.post('/',SymptomController.writeMessage.bind(SymptomController));
    // router.delete('/:id',SymptomController.deleteMessage.bind(SymptomController));
    // router.put('/:id',SymptomController.updateMessage.bind(SymptomController));
    // router.get('/:id',SymptomController.getMessage.bind(SymptomController));

    return router;
}

module.exports = SymptomRouter;