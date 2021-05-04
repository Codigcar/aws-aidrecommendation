const BaseBusiness = require('./base.business');
const { Desease } = require('./models')

class DeseaseBusiness extends BaseBusiness{
    constructor({ deseaseRepository }){
        super(deseaseRepository,Desease)
    }
}

module.exports = DeseaseBusiness;