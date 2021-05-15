const BaseRepository = require('./base.repository');

class UserRepository extends BaseRepository{
    constructor({db}){
        super(db,"User");
    }

    async getPasswordByKeyWord(keyWord){
        return await this._db[this._entity].findOne({where:{PalabraSecreta: keyWord}});
    }

    async getUserByKeyWord (keyWord) {
        const users = await this._db[this._entity].findAll({
            where:{
                PalabraSecreta:keyWord
            }
        });
        const count = users.length;
        return count;
    }
}

module.exports = UserRepository; 