/*This class are connecting whit your DataBase depending on the Entity*/
class BaseRepository{
    

    constructor(db,entity){
        this._db = db;
        this._entity = entity;
    }

    async getAll(){
        return await this._db[this._entity].findAll();
    }

    async get(id){
        return await this._db[this._entity].findOne({where:{id}});
    }

    async create(entity){
        return this._db[this._entity].create(entity);
    }

    async update(id,entity){
        delete entity.createdAt;
        delete entity.updatedAt;
        return await this._db[this._entity].update(entity,{where:{id}});
    }

    async delete(id){
        return await this._db[this._entity].destroy({where:{id}});
    }

    async getUserAccount(Usuario,Contrasenia){
        return await this._db[this._entity].findOne({where:{Usuario, Contrasenia}});
    }

    async getIdPatientDoctorByIdUser(userId){
        return await this._db[this._entity].findOne({where:{userId}});
    }

    async getByForeignKeyUserId(fk){
        return await this._db[this._entity].findOne({where:{ userId:fk }});
    }

    async getByForeignKeyPatientId(fk){
        return await this._db[this._entity].findAll({where:{ patientId:fk }});
    }

    async getByForeignKeyMedicalHistoryId(fk){
        return await this._db[this._entity].findAll({where:{ medicalHistoryId:fk }});
    }

    async getModelCategoryDeseaseSymptomBySymptomName(symptom){
        return await this._db[this._entity].findAll({where:{ Symptom:symptom }});
    }

    async getModelCategoryDeseaseSymptomBycategoryDeseaseId(categoryDeseaseId){
        return await this._db[this._entity].findOne({where:{ categoryDeseaseId }});
    }

    async getModelCategoryDeseaseSymptomBycategoryDeseaseId(categoryDeseaseId){
        return await this._db[this._entity].findOne({where:{ categoryDeseaseId }});
    }

    async getPrescriptionByDiseaseName(diseaseName){
        return await this._db[this._entity].findAll({where:{ Disease:diseaseName }});
    }

    async getQuestionByMedicalConsultationId(medicalConsultationId){
        return await this._db[this._entity].findAll({where:{ medicalConsultationId:medicalConsultationId }});
    }

    async getAllMedicalConsultationsByEstadoConsulta(estado){
        return await this._db[this._entity].findAll({where:{ Estado:estado }});
    }

    async getAllMedicalConsultationsByDoctorId(doctorId){
        return await this._db[this._entity].findAll({where:{ doctorId, Estado:1 }});
    }

  



}

module.exports = BaseRepository;