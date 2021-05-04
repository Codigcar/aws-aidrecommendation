const BaseBusiness = require('./base.business');
const { User } = require('./models')
const mapper = require('automapper-js');

class UserBusiness extends BaseBusiness{

    constructor({userRepository}){
        super(userRepository,User)
    }
    async getPasswordByKeyWord(keyWord){
        const entity = await this._entityRepository.getPasswordByKeyWord(keyWord);
        if(!entity) return;
        return mapper(this._entityToMap,entity.toJSON());
    }
}

module.exports = UserBusiness;