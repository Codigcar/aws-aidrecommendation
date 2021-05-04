const BaseRepository = require('./base.repository');

class DeficitRepository extends BaseRepository{
    constructor({db}){
        super(db,"Deficit");
    }
    async getAllDecificitsByMedicalHistorId(medicalHistoryId){
        return await this._db[this._entity].findAll({where:{medicalHistoryId}});
    }
}

module.exports = DeficitRepository;