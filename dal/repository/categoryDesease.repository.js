const BaseRepository = require('./base.repository');

class CategoryDeseaseRepository extends BaseRepository{
    constructor({db}){
        super(db,"CategoryDesease");
    }
}

module.exports = CategoryDeseaseRepository;