const {Router} = require("express");
const { check } = require("express-validator");
const { validateFields } = require('../../middlewares/validate-fields');

const LoginRouter = function({loginController}){
    const router = Router();

    router.post('/',[
        check('Usuario','El usuario es obligatorio').not().isEmpty(),
        check('Contrasenia','La contraseña es obligatorio').not().isEmpty(),
        validateFields
    ],loginController.login.bind(loginController));

    return router;
}

module.exports = LoginRouter;