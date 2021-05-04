const BaseBusiness = require('./base.business');
const { Prescription } = require('./models')

/*This class are connecting with his own Repository */
class PrescriptionBusiness extends BaseBusiness{

    constructor({prescriptionRepository}){
        super(prescriptionRepository,Prescription)
    }

    /*You can write other functions that you want, for example the function that are inside in your test.service.js */
}

module.exports = PrescriptionBusiness;