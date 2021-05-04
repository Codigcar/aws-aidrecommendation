const BaseBusiness = require('./base.business');
const { Question } = require('./models')

/*This class are connecting with his own Repository */
class QuestionBusiness extends BaseBusiness{

    constructor({questionRepository}){
        super(questionRepository,Question)
    }

    /*You can write other functions that you want, for example the function that are inside in your test.service.js */
}

module.exports = QuestionBusiness;