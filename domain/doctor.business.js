

const mapper = require('automapper-js');

const BaseBusiness = require('./base.business');
const { Doctor } = require('./models')

class DoctorBusiness extends BaseBusiness{
    constructor({ doctorRepository }){
        super(doctorRepository,Doctor)
    }
    
}

module.exports = DoctorBusiness;