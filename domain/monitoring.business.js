const BaseBusiness = require('./base.business');
const {Monitoring} = require('./models')

/*This class are connecting with his own Repository */
class MonitoringBusiness extends BaseBusiness{

    constructor({monitoringRepository}){
        super(monitoringRepository,Monitoring)
    }

    /*You can write other functions that you want, for example the function that are inside in your test.service.js */
}

module.exports = MonitoringBusiness;