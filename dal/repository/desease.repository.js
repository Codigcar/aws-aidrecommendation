const BaseRepository = require('./base.repository');

class DeseaseRepository extends BaseRepository{
    constructor({db}){
        super(db,"Desease");
    }
}

module.exports = DeseaseRepository;