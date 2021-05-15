const BaseRepository = require('./base.repository');

class ForoRepository extends BaseRepository{
    constructor({db}){
        super(db,"Foro");
    }

    async getAllWithAnswers() {
        return await this._db[this._entity].findAll({
            include:["answers"]
        });
    }
}

module.exports = ForoRepository; 