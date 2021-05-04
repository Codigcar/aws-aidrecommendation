const BaseService = require('./base.service');

/*Extends works like inheritance */
class QuestionService extends BaseService{

    constructor({questionBusiness}){
        super(questionBusiness)
    }

    /*You can add other methods that there aren´t in the crud */
}

module.exports = QuestionService;