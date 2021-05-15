const BaseService = require('./base.service');

/*Extends works like inheritance */
class UserService extends BaseService{

    constructor({userBusiness}){
        super(userBusiness)
    }

    async getPasswordByKeyWord(keyWord){
        const entity = await this._entityBunisess.getPasswordByKeyWord(keyWord);
        return entity;
    }

    async getUserByKeyWord (keyWord) {
        const count = await this._entityBunisess.getUserByKeyWord(keyWord);
        return count;
    }

    
}

module.exports = UserService;