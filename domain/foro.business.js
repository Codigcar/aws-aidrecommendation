const BaseBusiness = require('./base.business');
const { Foro } = require('./models')
const mapper = require('automapper-js');

class ForoBusiness extends BaseBusiness{
    constructor({ foroRepository }){
        super(foroRepository, Foro)
    }

    async getAllWithAnswers() {
        const entities= await this._entityRepository.getAllWithAnswers();
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }
}

module.exports = ForoBusiness;