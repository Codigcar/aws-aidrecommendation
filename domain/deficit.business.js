const BaseBusiness = require('./base.business');
const {Deficit } = require('./models')

const mapper = require('automapper-js');


class DeficitBusiness extends BaseBusiness{
    constructor({ deficitRepository }){
        super(deficitRepository, Deficit)
    }
    async getAllDecificitsByMedicalHistorId(medicalHistoryId){
        const entities= await this._entityRepository.getAllDecificitsByMedicalHistorId(medicalHistoryId);
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }
}

module.exports = DeficitBusiness;