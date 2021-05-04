const BaseBusiness = require('./base.business');
const { CategoryDesease } = require('./models')

class categoryDeseaseBusiness extends BaseBusiness{
    constructor({ categoryDeseaseRepository }){
        super(categoryDeseaseRepository, CategoryDesease)
    }
}

module.exports = categoryDeseaseBusiness;