/*This class works like a CRUD */
class BaseService{

    constructor(EntityBunisess){
        this._entityBunisess = EntityBunisess;
    }

    async getAll(){
        const entities = await this._entityBunisess.getAll();
        return entities;
    }

    async get(id){
        const entity = await this._entityBunisess.get(id);
        return entity;
    }

    async create(entity){
        entity = await this._entityBunisess.create(entity);
        return entity;
    }

    async delete(id){
        const deletedEntity = await this._entityBunisess.delete(id);
        return deletedEntity;
    }

    async update(id,entity){
        const updatedEntity = await this._entityBunisess.update(id,entity);
        return updatedEntity
    }

    async getUserAccount(user,password){
        const entity = await this._entityBunisess.getUserAccount(user,password);
        return entity;
    }

    async getIdPatientDoctorByIdUser(userId){
        const entity = await this._entityBunisess.getIdPatientDoctorByIdUser(userId);
        return entity;
    }

    async getByForeignKeyUserId(fk){
        const entity = await this._entityBunisess.getByForeignKeyUserId(fk);
        return entity;
    }
    async getByForeignKeyPatientId(fk){
        const entity = await this._entityBunisess.getByForeignKeyPatientId(fk);
        return entity;
    }
    async getByForeignKeyMedicalHistoryId(fk){
        const entity = await this._entityBunisess.getByForeignKeyMedicalHistoryId(fk);
        return entity;
    }
    async getModelCategoryDeseaseSymptomBySymptomName(symptom){
        const entity = await this._entityBunisess.getModelCategoryDeseaseSymptomBySymptomName(symptom);
        return entity;
    }
    async getModelCategoryDeseaseSymptomBycategoryDeseaseId(categoryDeseaseId){
        const entity = await this._entityBunisess.getModelCategoryDeseaseSymptomBycategoryDeseaseId(categoryDeseaseId);
        return entity;
    }
    async getPrescriptionByDiseaseName(diseaseName){
        const entity = await this._entityBunisess.getPrescriptionByDiseaseName(diseaseName);
        return entity;
    }
    async getQuestionByMedicalConsultationId(medicalConsultationId){
        const entity = await this._entityBunisess.getQuestionByMedicalConsultationId(medicalConsultationId);
        return entity;
    }
    async getAllMedicalConsultationsByEstadoConsulta(estado){
        const entity = await this._entityBunisess.getAllMedicalConsultationsByEstadoConsulta(estado);
        return entity;
    }
    async getAllMedicalConsultationsByDoctorId(doctorId){
        const entity = await this._entityBunisess.getAllMedicalConsultationsByDoctorId(doctorId);
        return entity;
    }
}

module.exports = BaseService;