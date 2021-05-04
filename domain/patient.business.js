const BaseBusiness = require('./base.business');
const { Patient } = require('./models')
const mapper = require('automapper-js');


/*This class are connecting with his own Repository */
class PatientBusiness extends BaseBusiness{

    constructor({patientRepository}){
        super(patientRepository,Patient)
    }

    
}

module.exports = PatientBusiness;