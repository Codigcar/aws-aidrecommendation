const BaseService = require('./base.service');

class SymptomService extends BaseService{

    constructor({symptomBusiness}){
        super(symptomBusiness)
    }
}

module.exports = SymptomService;