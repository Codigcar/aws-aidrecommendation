const BaseRepository = require('./base.repository');

class MedicalHistoryRepository extends BaseRepository{
    constructor({db}){
        super(db,"MedicalHistory");
    }
    async getAllByPatientId(id){
        return await this._db[this._entity].findOne({where:{patientId:id}});
    }
    async getMedicalHistoryByPatientId(patientId){
        return await this._db[this._entity].findOne({where:{patientId}});
    }
}

module.exports = MedicalHistoryRepository;