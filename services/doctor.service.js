const BaseService = require('./base.service');

class DoctorService extends BaseService{

    constructor({doctorBusiness}){
        super(doctorBusiness)
    }
}

module.exports = DoctorService;