const BaseService = require('./base.service');

/*Extends works like inheritance */
class PrescriptionService extends BaseService{

    constructor({prescriptionBusiness}){
        super(prescriptionBusiness)
    }

    /*You can add other methods that there aren´t in the crud */
}

module.exports = PrescriptionService;