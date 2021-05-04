
const BaseRepository = require('./base.repository');

class PrescriptionRepository extends BaseRepository{
    constructor({db}){
        super(db,"Prescription");
    }
}

module.exports = PrescriptionRepository;