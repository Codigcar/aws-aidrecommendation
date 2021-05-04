const {Router} = require("express");
const { validateFields } = require("../../middlewares/validate-fields");

const MedicalHistoryRouter = function({medicalHistoryController, validateJWT}){
    const router = Router();

    router.get('/:patientId/medicalHistories/verifyTest',[
        validateJWT.validateJWTMetodo.bind(validateJWT),
        validateFields
    ],medicalHistoryController.verifyTest.bind(medicalHistoryController));

    router.get('/:patientId/medicalHistories/',[
        validateJWT.validateJWTMetodo.bind(validateJWT),
        validateFields
    ],medicalHistoryController.getMessages.bind(medicalHistoryController));

    router.post('/:patientId/medicalHistories',[
        validateJWT.validateJWTMetodo.bind(validateJWT),
        validateFields
    ],medicalHistoryController.writeMessage.bind(medicalHistoryController));

    router.delete('/:patientId/medicalHistories/:id',[
        validateJWT.validateJWTMetodo.bind(validateJWT),
        validateFields
    ],medicalHistoryController.deleteMessage.bind(medicalHistoryController));

    router.put('/:patientId/medicalHistories/:id',[
        validateJWT.validateJWTMetodo.bind(validateJWT),
        validateFields
    ],medicalHistoryController.updateMessage.bind(medicalHistoryController));

    router.get('/:patientId/medicalHistories/:id',[
        validateJWT.validateJWTMetodo.bind(validateJWT),
        validateFields
    ],medicalHistoryController.getMessage.bind(medicalHistoryController));

    return router;
}

module.exports = MedicalHistoryRouter;