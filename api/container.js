const {asClass,asFunction,createContainer,asValue} = require("awilix");

//App Start
const Startup = require("./startup");
const Server = require("./server");
const config = require("../config/environments");
const Router = require("./routes");

//Routes
const TestRoutes = require("./routes/test.route");
const PatientRoutes = require("./routes/patient.route");
const DoctorRoutes = require("./routes/doctor.route");
const MedicalHistoryRoutes = require("./routes/medicalHistory.route");
const UserRoutes = require("./routes/user.route");
const LoginRoutes = require("./routes/login.route");
const ValidateJWT = require("../middlewares/validate-jwt");
const DeficitRoutes = require("./routes/deficit.route");
const CategoryDeseaseRoutes = require("./routes/categoryDesease.route");
const DeseaseRoutes = require("./routes/desease.route");
const MedicalConsultationRoutes = require("./routes/medicalConsultation.route");
const SymptomRoutes = require("./routes/symptom.route");
const CategoryDeseaseSymptomRoutes = require("./routes/categoryDeseaseSymptom.route");
const PrescriptionRoutes = require("./routes/prescription.route");
const QuestionRoutes = require("./routes/question.route");
const MonitoringRoutes = require("./routes/monitoring.route");
const ForoRoutes = require("./routes/foro.route");
const AnswerRoutes = require("./routes/answer.route");


//Controllers
const {
    TestController,
    PatientController,
    DoctorController,
    MedicalHistoryController,
    UserController,
    ExampleController,
    LoginController,
    DeficitController,
    CategoryDeseaseController,
    DeseaseController,
    MedicalConsultationController,
    SymptomController,
    CategoryDeseaseSymptomController,
    PrescriptionController,
    QuestionController,
    MonitoringController,
    ForoController,
    AnswerController
} = require('./controllers')

//Services
const {
    TestService,
    PatientService,
    DoctorService,
    MedicalHistoryService,
    UserService,
    DeficitService,
    CategoryDeseaseService,
    DeseaseService,
    MedicalConsultationService,
    SymptomService,
    CategoryDeseaseSymptomService,
    PrescriptionService,
    QuestionService,
    MonitoringService,
    ForoService,
    AnswerService
} = require('../services')

//Business
const {
    TestBusiness,
    PatientBusiness,
    DoctorBusiness,
    MedicalHistoryBusiness,
    UserBusiness,
    DeficitBusiness,
    CategoryDeseaseBusiness,
    DeseaseBusiness,
    MedicalConsultationBusiness,
    SymptomBusiness,
    CategoryDeseaseSymptomBusiness,
    PrescriptionBusiness,
    QuestionBusiness,
    MonitoringBusiness,
    ForoBusiness,
    AnswerBusiness
} = require('../domain')

//Repository
const {
    TestRepository,
    PatientRepository,
    DoctorRepository,
    MedicalHistoryRepository,
    UserRepository,
    DeficitRepository,
    CategoryDeseaseRepository,
    DeseaseRepository,
    MedicalConsultationRepository,
    SymptomRepository,
    CategoryDeseaseSymptomRepository,
    PrescriptionRepository,
    QuestionRepository,
    MonitoringRepository,
    ForoRepository,
    AnswerRepository
} = require('../dal/repository')


//Db
const db = require('../dal/models');

const container = createContainer();

container
    .register({
        //Things that you need when you start tha app
        app: asClass(Startup).singleton(),
        server: asClass(Server).singleton(),
        config: asValue(config),
        router: asFunction(Router).singleton(),
    })
    .register({
        //Roues
        testRoutes : asFunction(TestRoutes).singleton(),
        patientRoutes : asFunction(PatientRoutes).singleton(),
        doctorRoutes : asFunction(DoctorRoutes).singleton(),
        medicalHistoryRoutes : asFunction(MedicalHistoryRoutes).singleton(),
        userRoutes : asFunction(UserRoutes).singleton(),
        loginRoutes : asFunction(LoginRoutes).singleton(),
        deficitRoutes : asFunction(DeficitRoutes).singleton(),
        categoryDeseaseRoutes : asFunction(CategoryDeseaseRoutes).singleton(),
        deseaseRoutes : asFunction(DeseaseRoutes).singleton(),
        medicalConsultationRoutes : asFunction(MedicalConsultationRoutes).singleton(),
        symptomRoutes : asFunction(SymptomRoutes).singleton(),
        categoryDeseaseSymptomRoutes : asFunction(CategoryDeseaseSymptomRoutes).singleton(),
        prescriptionRoutes : asFunction(PrescriptionRoutes).singleton(),
        questionRoutes : asFunction(QuestionRoutes).singleton(),
        monitoringRoutes : asFunction(MonitoringRoutes).singleton(),
        foroRoutes : asFunction(ForoRoutes).singleton(),
        answerRoutes : asFunction(AnswerRoutes).singleton()
    })
    .register({
        /*Controllers */
        testController: asClass(TestController).singleton(),
        patientController: asClass(PatientController).singleton(),
        doctorController: asClass(DoctorController).singleton(),
        medicalHistoryController: asClass(MedicalHistoryController).singleton(),
        userController: asClass(UserController).singleton(),
        exampleController: asClass(ExampleController).singleton(),
        loginController: asClass(LoginController).singleton(),
        deficitController: asClass(DeficitController).singleton(),
        categoryDeseaseController: asClass(CategoryDeseaseController).singleton(),
        deseaseController: asClass(DeseaseController).singleton(),
        medicalConsultationController: asClass(MedicalConsultationController).singleton(),
        symptomController: asClass(SymptomController).singleton(),
        categoryDeseaseSymptomController: asClass(CategoryDeseaseSymptomController).singleton(),
        prescriptionController: asClass(PrescriptionController).singleton(),
        questionController: asClass(QuestionController).singleton(),
        monitoringController: asClass(MonitoringController).singleton(),
        foroController: asClass(ForoController).singleton(),
        answerController : asClass(AnswerController).singleton()
    })
    .register({
        /*Services */
        testService: asClass(TestService).singleton(),
        patientService: asClass(PatientService).singleton(),
        doctorService: asClass(DoctorService).singleton(),
        medicalHistoryService: asClass(MedicalHistoryService).singleton(),
        userService: asClass(UserService).singleton(),
        deficitService: asClass(DeficitService).singleton(),
        categoryDeseaseService: asClass(CategoryDeseaseService).singleton(),
        deseaseService: asClass(DeseaseService).singleton(),
        medicalConsultationService: asClass(MedicalConsultationService).singleton(),
        symptomService: asClass(SymptomService).singleton(),
        categoryDeseaseSymptomService: asClass(CategoryDeseaseSymptomService).singleton(),
        prescriptionService: asClass(PrescriptionService).singleton(),
        questionService: asClass(QuestionService).singleton(),
        monitoringService: asClass(MonitoringService).singleton(),
        foroService: asClass(ForoService).singleton(),
        answerService : asClass(AnswerService).singleton()
    })
    .register({
        /*Business */
        testBusiness : asClass(TestBusiness).singleton(),
        patientBusiness: asClass(PatientBusiness).singleton(),
        doctorBusiness: asClass(DoctorBusiness).singleton(),
        medicalHistoryBusiness: asClass(MedicalHistoryBusiness).singleton(),
        userBusiness: asClass(UserBusiness).singleton(),
        deficitBusiness: asClass(DeficitBusiness).singleton(),
        categoryDeseaseBusiness: asClass(CategoryDeseaseBusiness).singleton(),
        deseaseBusiness: asClass(DeseaseBusiness).singleton(),
        medicalConsultationBusiness: asClass(MedicalConsultationBusiness).singleton(),
        symptomBusiness: asClass(SymptomBusiness).singleton(),
        categoryDeseaseSymptomBusiness: asClass(CategoryDeseaseSymptomBusiness).singleton(),
        prescriptionBusiness: asClass(PrescriptionBusiness).singleton(),
        questionBusiness: asClass(QuestionBusiness).singleton(),
        monitoringBusiness: asClass(MonitoringBusiness).singleton(),
        foroBusiness: asClass(ForoBusiness).singleton(),
        answerBusiness : asClass(AnswerBusiness).singleton()
    })
    .register({
        /*Repository */
        testRepository: asClass(TestRepository).singleton(),
        patientRepository: asClass(PatientRepository).singleton(),
        doctorRepository: asClass(DoctorRepository).singleton(),
        medicalHistoryRepository: asClass(MedicalHistoryRepository).singleton(),
        userRepository: asClass(UserRepository).singleton(),
        deficitRepository: asClass(DeficitRepository).singleton(),
        categoryDeseaseRepository: asClass(CategoryDeseaseRepository).singleton(),
        deseaseRepository: asClass(DeseaseRepository).singleton(),
        medicalConsultationRepository: asClass(MedicalConsultationRepository).singleton(),
        symptomRepository: asClass(SymptomRepository).singleton(),
        categoryDeseaseSymptomRepository: asClass(CategoryDeseaseSymptomRepository).singleton(),
        prescriptionRepository: asClass(PrescriptionRepository).singleton(),
        questionRepository: asClass(QuestionRepository).singleton(),
        monitoringRepository: asClass(MonitoringRepository).singleton(),
        foroRepository: asClass(ForoRepository).singleton(),
        answerRepository : asClass(AnswerRepository).singleton()
    })
    .register({
        db: asValue(db)
    })
    .register({
        validateJWT : asClass(ValidateJWT).singleton(),
    })
    
    

module.exports = container;