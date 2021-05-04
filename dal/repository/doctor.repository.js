const BaseRepository = require('./base.repository');

class DoctorRepository extends BaseRepository{
    constructor({db}){
        super(db,"Doctor");
    }
    
}

module.exports = DoctorRepository;