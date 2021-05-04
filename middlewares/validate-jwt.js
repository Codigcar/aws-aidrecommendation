const { response } = require('express');
const jwt = require('jsonwebtoken');    
const user = require('../dal/models/user');



class ValidateJwt {
    constructor({userService}){
        this._userService = userService;
    }

    async validateJWTMetodo(req, res, next) {
        const token = req.header('token');

        if( !token ){
            return res.status(400).json({
                msg: 'No hay token en la petición'
            });
        }

        try {
            const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
            const user = await this._userService.get(uid);
         
            req.user = user;
            next();
        } catch (error) {
            res.status(401).json({
                msg: 'Token no valido',
                error
            });
            
        }
    }
}

module.exports = ValidateJwt