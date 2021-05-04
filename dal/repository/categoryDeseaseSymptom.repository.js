const BaseRepository = require('./base.repository');

class CategoryDeseaseSymptomRepository extends BaseRepository{
    constructor({db}){
        super(db,"CategoryDeseaseSymptom");
    }
}

module.exports = CategoryDeseaseSymptomRepository; 