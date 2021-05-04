
const {Router} = require("express");
const { validateFields } = require('../../middlewares/validate-fields');


const PatientRouter = function({patientController,validateJWT}){
    const router = Router();

    router.get('/verifyTest',patientController.verifyTest.bind(patientController));
    router.get('/',patientController.getMessages.bind(patientController));
    // router.delete('/:id',[
    //     validateJWT.validateJWTMetodo.bind(validateJWT),
    //     validateFields
    // ],patientController.deleteMessage.bind(patientController));
    // router.put('/:id',[
    //     validateJWT.validateJWTMetodo.bind(validateJWT),
    //     validateFields
    // ],patientController.updateMessage.bind(patientController));
    router.get('/:id/',[],patientController.getMessage.bind(patientController));

    // router.post('/'.patientController.adminCreateForo.bind(patientController));

    return router;
}

module.exports = PatientRouter;