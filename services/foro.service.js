const BaseService = require('./base.service');

/*Extends works like inheritance */
class ForoService extends BaseService{

    constructor({foroBusiness}){
        super(foroBusiness)
    }

    /*You can add other methods that there aren´t in the crud */
    
}

module.exports = ForoService;