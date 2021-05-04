const BaseRepository = require('./base.repository');
const mapper = require('automapper-js');


class MedicalConsultationRepository extends BaseRepository{
    constructor({db}){
        super(db,"MedicalConsultation");
    }
    async getAllByMedicalConsultationId(id){
        return await this._db[this._entity].findAll({where:{ medicalHistoryId:id }});

    }
}

module.exports = MedicalConsultationRepository;