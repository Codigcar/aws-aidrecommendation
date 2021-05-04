const BaseBusiness = require('./base.business');
const { MedicalConsultation } = require('./models')
const mapper = require('automapper-js');

class MedicalConsultationBusiness extends BaseBusiness{
    constructor({ medicalConsultationRepository }){
        super(medicalConsultationRepository, MedicalConsultation)
    }
    async getAllByMedicalConsultationId(id){
        const entities= await this._entityRepository.getAllByMedicalConsultationId(id);
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }

   

    
}

module.exports = MedicalConsultationBusiness;