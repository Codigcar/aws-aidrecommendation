const BaseBusiness = require('./base.business');
const { MedicalHistory } = require('./models')
const mapper = require('automapper-js');

/*This class are connecting with his own Repository */
class MedicalHistoryBusiness extends BaseBusiness{

    constructor({ medicalHistoryRepository }){
        super(medicalHistoryRepository,MedicalHistory)
    }

    async getAllByPatientId(id){
        const entity = await this._entityRepository.getAllByPatientId(id);
        if(!entity) return;
        return mapper(this._entityToMap,entity.toJSON());
    }

    async getMedicalHistoryByPatientId(patientId){
        const entity = await this._entityRepository.getMedicalHistoryByPatientId(patientId);
        if(!entity) return;
        return mapper(this._entityToMap,entity.toJSON());
    }


   

}

module.exports = MedicalHistoryBusiness;