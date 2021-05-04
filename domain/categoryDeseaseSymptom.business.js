const BaseBusiness = require('./base.business');
const { CategoryDeseaseSymptom } = require('./models')

/*This class are connecting with his own Repository */
class CategoryDeseaseSymptomBusiness extends BaseBusiness{

    constructor({categoryDeseaseSymptomRepository}){
        super(categoryDeseaseSymptomRepository,CategoryDeseaseSymptom)
    }

    /*You can write other functions that you want, for example the function that are inside in your test.service.js */
}

module.exports = CategoryDeseaseSymptomBusiness;