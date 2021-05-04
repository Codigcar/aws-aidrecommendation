const BaseService = require('./base.service');

/*Extends works like inheritance */
class MonitoringService extends BaseService{

    constructor({monitoringBusiness}){
        super(monitoringBusiness)
    }

    /*You can add other methods that there aren´t in the crud */
}

module.exports = MonitoringService;