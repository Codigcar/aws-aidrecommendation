const BaseService = require('./base.service');

class MedicalConsultationService extends BaseService{

    constructor({medicalConsultationBusiness}){
        super(medicalConsultationBusiness)
    }
    async getAllByMedicalConsultationId(id){
        const entities = await this._entityBunisess.getAllByMedicalConsultationId(id);
        return entities;
    }

}

module.exports = MedicalConsultationService;