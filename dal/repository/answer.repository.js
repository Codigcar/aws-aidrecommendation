const BaseRepository = require('./base.repository');

class AnswerRepository extends BaseRepository{
    constructor({db}){
        super(db,"Answer");
    }

    async findByForoId(id){
        return await this._db[this._entity].findAll({
            where:{
                foroId:id
            },
            attributes: ['id', 'text','foroId'],
        });
    }
}

module.exports = AnswerRepository; 