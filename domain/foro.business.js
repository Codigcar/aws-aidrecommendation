const BaseBusiness = require('./base.business');
const { Foro } = require('./models')

class ForoBusiness extends BaseBusiness{
    constructor({ foroRepository }){
        super(foroRepository, Foro)
    }
}

module.exports = ForoBusiness;