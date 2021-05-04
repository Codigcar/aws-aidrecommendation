const BaseService = require('./base.service');

/*Extends works like inheritance */
class MedicalHistoryService extends BaseService{

    constructor({ medicalHistoryBusiness }){
        super(medicalHistoryBusiness)
    }

    async getAllByPatientId(id){
        const entity = await this._entityBunisess.getAllByPatientId(id);
        return entity;
    }

    async getMedicalHistoryByPatientId(patientId){
        const entity = await this._entityBunisess.getMedicalHistoryByPatientId(patientId);
        return entity;
    }
}

module.exports = MedicalHistoryService;