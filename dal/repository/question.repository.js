const BaseRepository = require('./base.repository');

class QuestionRepository extends BaseRepository{
    constructor({db}){
        super(db,"Question");
    }
}

module.exports = QuestionRepository;