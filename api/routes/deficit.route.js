const {Router} = require("express");
const { validateFields } = require('../../middlewares/validate-fields');
const { check } = require("express-validator");


const DeficitRouter = function({deficitController,validateJWT}){
    const router = Router();

    router.get('/:patientId/medicalHistories/:medicalHistroyId/deficits/verifyTest',deficitController.verifyTest.bind(deficitController));
    
    router.get('/:patientId/medicalHistories/:medicalHistroyId/deficits/',[
        validateJWT.validateJWTMetodo.bind(validateJWT),
        validateFields
    ],deficitController.getMessages.bind(deficitController));
    
    router.delete('/:patientId/medicalHistories/:medicalHistroyId/deficits/:id',[
        validateJWT.validateJWTMetodo.bind(validateJWT),
        validateFields
    ],deficitController.deleteMessage.bind(deficitController));
    
    router.post('/:patientId/medicalHistories/:medicalHistroyId/deficits',[
        validateJWT.validateJWTMetodo.bind(validateJWT),
        check('TipoDeficit','TipoDeficit es obligatorio').not().isEmpty(),
        check('Deficit','Deficit es obligatorio').not().isEmpty(),
        check('EdadSufrioEnfermedad','EdadSufrioEnfermedad es obligatorio').not().isEmpty(),
        check('Cronico','Cronico es obligatorio').not().isEmpty(),
        check('Detalles','Detalles es obligatorio').not().isEmpty(),
        validateFields
    ],deficitController.writeMessage.bind(deficitController));


    router.put('/:patientId/medicalHistories/:medicalHistroyId/deficits/:id',[
        validateJWT.validateJWTMetodo.bind(validateJWT),
        validateFields
    ],deficitController.updateMessage.bind(deficitController));

    router.get('/:patientId/medicalHistories/:medicalHistroyId/deficits/:id',[
        validateJWT.validateJWTMetodo.bind(validateJWT),
        validateFields
    ],deficitController.getMessage.bind(deficitController));

    return router;
}

module.exports = DeficitRouter;