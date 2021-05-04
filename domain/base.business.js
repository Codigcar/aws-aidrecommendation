const mapper = require('automapper-js');
/*
The entity of the BD need to be different to Domain Entity , for this reason we need to use mapper
*/


/*This class works like a CRUD that are connecting with the repository */
class BaseBusiness{

    constructor(EntityRepository,EntityToMap){
        this._entityRepository = EntityRepository;
        this._entityToMap = EntityToMap;
    }

    async getAll(){
        const entities= await this._entityRepository.getAll();
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }

    async get(id){
        const entity = await this._entityRepository.get(id);
        if(!entity) return;
        return mapper(this._entityToMap,entity.toJSON());
    }

    async create(entity){
        entity = mapper(this._entityToMap,entity); /*The entity(DTO) that you are passing could be different to the Entity inside of the domain */
        const createdEntity = await this._entityRepository.create(entity);
        return mapper(this._entityToMap,createdEntity);
    }

    async update(id,entity){
        entity.id = id; 
        entity = mapper(this._entityToMap,entity);
        const updatedEntity = await this._entityRepository.update(id,entity);
        return mapper(this._entityToMap,updatedEntity);
    }

    async delete(id){
        const deletedEntity = await this._entityRepository.delete(id);
        return deletedEntity;
    }

    async getUserAccount(user,password){
        const entity = await this._entityRepository.getUserAccount(user,password);
        if(!entity) return;
        return mapper(this._entityToMap,entity.toJSON());
    }                                 
    async getByForeignKeyPatientId(fk){
        const entities= await this._entityRepository.getByForeignKeyPatientId(fk);
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }                                                                  

    async getIdPatientDoctorByIdUser(userId){
        const entity = await this._entityRepository.getIdPatientDoctorByIdUser(userId);
        if(!entity) return;
        return mapper(this._entityToMap,entity.toJSON());
    }

    async getByForeignKeyUserId(fk){
        const entity = await this._entityRepository.getByForeignKeyUserId(fk);
        if(!entity) return;
        return mapper(this._entityToMap,entity.toJSON());
    }
    
    async getByForeignKeyMedicalHistoryId(fk){
        const entities= await this._entityRepository.getByForeignKeyMedicalHistoryId(fk);
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }
    async getModelCategoryDeseaseSymptomBySymptomName(symptom){
        const entities= await this._entityRepository.getModelCategoryDeseaseSymptomBySymptomName(symptom);
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }
    async getModelCategoryDeseaseSymptomBycategoryDeseaseId(categoryDeseaseId){
        const entity = await this._entityRepository.getModelCategoryDeseaseSymptomBycategoryDeseaseId(categoryDeseaseId);
        if(!entity) return;
        return mapper(this._entityToMap,entity.toJSON());
    }
    async getPrescriptionByDiseaseName(symptom){
        const entities= await this._entityRepository.getPrescriptionByDiseaseName(symptom);
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }
    async getQuestionByMedicalConsultationId(symptom){
        const entities= await this._entityRepository.getQuestionByMedicalConsultationId(symptom);
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }
    async getAllMedicalConsultationsByEstadoConsulta(estado){
        const entities= await this._entityRepository.getAllMedicalConsultationsByEstadoConsulta(estado);
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }  
    async getAllMedicalConsultationsByDoctorId(doctorId){
        const entities= await this._entityRepository.getAllMedicalConsultationsByDoctorId(doctorId);
        return entities.map(entity=>mapper(this._entityToMap,entity.toJSON())); 
    }  
}

module.exports = BaseBusiness;