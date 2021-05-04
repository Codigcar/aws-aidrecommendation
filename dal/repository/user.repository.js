const BaseRepository = require('./base.repository');

class UserRepository extends BaseRepository{
    constructor({db}){
        super(db,"User");
    }

    async getPasswordByKeyWord(keyWord){
        return await this._db[this._entity].findOne({where:{PalabraSecreta: keyWord}});
    }
}

module.exports = UserRepository; 