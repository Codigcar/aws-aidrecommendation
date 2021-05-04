const BaseRepository = require('./base.repository');

class MonitoringRepository extends BaseRepository{
    constructor({db}){
        super(db,"Monitoring");
    }
}

module.exports = MonitoringRepository;