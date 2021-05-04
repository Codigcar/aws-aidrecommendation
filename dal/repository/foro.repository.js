const BaseRepository = require('./base.repository');

class ForoRepository extends BaseRepository{
    constructor({db}){
        super(db,"Foro");
    }
}

module.exports = ForoRepository; 