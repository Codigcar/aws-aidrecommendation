const {Router} = require("express");
const { check } = require("express-validator");


const UserRouter = function({userController}){
    const router = Router();

    router.post('/',[
        check('Usuario','El user es obligatorio').not().isEmpty(),
        check('Correo','El correo es obligatorio').not().isEmpty(),
        check('Contrasenia','La contraseña es obligatorio').not().isEmpty(),
        check('Rol','El rol es obligatorio').not().isEmpty(),
        check('PalabraSecreta','La palabra secreta es obligatorio').not().isEmpty(),
        check('DNI','El DNI es obligatorio').not().isEmpty(),
        check('Sexo','El sexo es obligatorio').not().isEmpty(),
        check('Apellido','El apellido es obligatorio').not().isEmpty(),
        check('Nombre','El nombre es obligatorio').not().isEmpty(),
        check('Edad','La edad es obligatorio').not().isEmpty(),
    ],userController.writeMessage.bind(userController));

    router.get('/idByToken/:token',userController.getIdByToken.bind(userController));
    router.get('/:userId',userController.getPatientODoctorByUserId.bind(userController));
    router.post('/password',userController.getPasswordByKeyWord.bind(userController));
    router.put('/:userId',userController.updateUsuarioPatientODoctor.bind(userController));
    return router;
}

module.exports = UserRouter;