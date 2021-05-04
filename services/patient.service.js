const BaseService = require('./base.service');

/*Extends works like inheritance */
class PatientService extends BaseService{

    constructor({patientBusiness}){
        super(patientBusiness)
    }

    /*You can add other methods that there aren´t in the crud */
    
}

module.exports = PatientService;