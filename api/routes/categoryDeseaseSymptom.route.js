const {Router} = require("express");

const CategoryDeseaseSymptomRouter = function({categoryDeseaseSymptomController}){
    const router = Router();

    router.get('/verifyTest',categoryDeseaseSymptomController.verifyTest.bind(categoryDeseaseSymptomController));
    router.get('/',categoryDeseaseSymptomController.getMessages.bind(categoryDeseaseSymptomController));
    router.post('/',categoryDeseaseSymptomController.writeMessage.bind(categoryDeseaseSymptomController));
    router.delete('/:id',categoryDeseaseSymptomController.deleteMessage.bind(categoryDeseaseSymptomController));
    router.put('/:id',categoryDeseaseSymptomController.updateMessage.bind(categoryDeseaseSymptomController));
    router.get('/:id',categoryDeseaseSymptomController.getMessage.bind(categoryDeseaseSymptomController));

    return router;
}

module.exports = CategoryDeseaseSymptomRouter;