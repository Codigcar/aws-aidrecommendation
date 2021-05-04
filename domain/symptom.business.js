const BaseBusiness = require('./base.business');
const { Symptom } = require('./models')

class SymptomBusiness extends BaseBusiness{
    constructor({ symptomRepository }){
        super(symptomRepository,Symptom)
    }
}

module.exports = SymptomBusiness;