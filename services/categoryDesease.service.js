const BaseService = require('./base.service');

class CategoryDeseaseService extends BaseService{
    constructor({categoryDeseaseBusiness}){
        super(categoryDeseaseBusiness)
    }
}

module.exports = CategoryDeseaseService;