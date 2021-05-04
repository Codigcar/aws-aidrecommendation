const BaseService = require('./base.service');

class DeficitService extends BaseService{

    constructor({deficitBusiness}){
        super(deficitBusiness)
    }

    async getAllDecificitsByMedicalHistorId(medicalHistoryId){
        const entities = await this._entityBunisess.getAllDecificitsByMedicalHistorId(medicalHistoryId);
        return entities;
    }

}

module.exports = DeficitService;