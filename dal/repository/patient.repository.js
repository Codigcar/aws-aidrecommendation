const BaseRepository = require('./base.repository');

class PatientRepository extends BaseRepository{
    constructor({db}){
        super(db,"Patient");
    }

    
}

module.exports = PatientRepository; 