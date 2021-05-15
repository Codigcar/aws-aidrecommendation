const BaseService = require('./base.service');

/*Extends works like inheritance */
class AnswerService extends BaseService{

    constructor({answerBusiness}){
        super(answerBusiness)
    }

    /*You can add other methods that there aren´t in the crud */

    async findByForoId(id){
        const entities = await this._entityBunisess.findByForoId(id);
        return entities;
    }
    
}

module.exports = AnswerService;