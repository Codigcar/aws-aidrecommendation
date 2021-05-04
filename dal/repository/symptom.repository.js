const BaseRepository = require('./base.repository');

class SymptomRepository extends BaseRepository{
    constructor({db}){
        super(db,"Symptom");
    }
}

module.exports = SymptomRepository; 