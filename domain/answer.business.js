const BaseBusiness = require('./base.business');
const { Answer } = require('./models');
const mapper = require('automapper-js');

class AnswerBusiness extends BaseBusiness{
    constructor({ answerRepository }){
        super(answerRepository, Answer)
    }

    async findByForoId(id){
        const entities= await this._entityRepository.findByForoId(id);
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }
}

module.exports = AnswerBusiness;