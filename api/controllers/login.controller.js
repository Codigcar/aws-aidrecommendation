const { generarJWT } = require("../../helpers/generarJWT");


class LoginController {

    constructor({ userService, patientService, doctorService }) {
        this._userService = userService;
        this._patientService = patientService;
        this._doctorService = doctorService;
    }

    async login(req, res) {

        const { Usuario, Contrasenia } = req.body;
        try {

            const data = await this._userService.getUserAccount(Usuario,Contrasenia);
            if( !data ){
                return res.status(400).json({
                    msg:'Usuario / Password no son correctos'
                })
            }

            let patientOdoctor = '';
             patientOdoctor = await this._patientService.getByForeignKeyUserId(data.id);
            if( !patientOdoctor ){
                patientOdoctor = await this._doctorService.getByForeignKeyUserId(data.id);
            }
            
            const user = await this._userService.get(patientOdoctor.userId);
            
            user.patientOdoctor = patientOdoctor


            const token = await generarJWT( data.id );
            res.send({
                // data,
                data:user,
                token
            })
        } catch (err) {
            res.send({
                status: "404",
                message: err
            })
        }
    }
}

module.exports = LoginController;
