const {Router} = require("express");
const { validateFields } = require('../../middlewares/validate-fields');


const CategoryDeseaseRouter = function({doctorController,categoryDeseaseController,validateJWT}){
    const router = Router();

    router.get('/verifyTest',categoryDeseaseController.verifyTest.bind(categoryDeseaseController));
    router.get('/',categoryDeseaseController.getMessages.bind(categoryDeseaseController));
    router.post('/',categoryDeseaseController.writeMessage.bind(categoryDeseaseController));
    // router.delete('/:id',categoryDeseaseController.deleteMessage.bind(categoryDeseaseController));
    // router.put('/:id',categoryDeseaseController.updateMessage.bind(categoryDeseaseController));
    // router.get('/:id',categoryDeseaseController.getMessage.bind(categoryDeseaseController));

    return router;
}

module.exports = CategoryDeseaseRouter;