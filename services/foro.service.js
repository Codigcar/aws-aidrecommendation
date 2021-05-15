const BaseService = require('./base.service');

/*Extends works like inheritance */
class ForoService extends BaseService{

    constructor({foroBusiness}){
        super(foroBusiness)
    }

    /*You can add other methods that there aren´t in the crud */
    async getAllWithAnswers() {
        const entities = await this._entityBunisess.getAllWithAnswers();
        return entities;
    }
}

module.exports = ForoService;