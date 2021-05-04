const BaseService = require('./base.service');

class DeseaseService extends BaseService{

    constructor({deseaseBusiness}){
        super(deseaseBusiness)
    }
}

module.exports = DeseaseService;