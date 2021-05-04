const cors = require("cors");
const bodyParser = require("body-parser");
const {Router} = require("express");

/*Write all routes that you have */
module.exports = function({
    testRoutes, 
    patientRoutes, 
    doctorRoutes,
    medicalHistoryRoutes, 
    userRoutes,
    loginRoutes,
    deficitRoutes,
    categoryDeseaseRoutes,
    deseaseRoutes,
    medicalConsultationRoutes,
    symptomRoutes,
    categoryDeseaseSymptomRoutes,
    prescriptionRoutes,
    questionRoutes,
    monitoringRoutes,
    foroRoutes,
}){
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors())
        .use(bodyParser.json());

    /*Apiroute like /user,/students,etc */
    apiRoute.use('/test',testRoutes);
    apiRoute.use('/login', loginRoutes);
    apiRoute.use('/register', userRoutes, patientRoutes, doctorRoutes);
    apiRoute.use('/patients',patientRoutes);
    apiRoute.use('/doctors',doctorRoutes);
    apiRoute.use('/patients',medicalHistoryRoutes);
    apiRoute.use('/patients',deficitRoutes, medicalHistoryRoutes);
    apiRoute.use('/user',userRoutes);
    apiRoute.use('/categoriesDeseases',categoryDeseaseRoutes);
    apiRoute.use('/categoriesDeseases',deseaseRoutes);
    // consultas medicas
    apiRoute.use('/patients',medicalConsultationRoutes, medicalHistoryRoutes,categoryDeseaseSymptomRoutes, prescriptionRoutes, questionRoutes);

    apiRoute.use('/symptoms',symptomRoutes);
    apiRoute.use('/categoryDeseaseSymptoms',categoryDeseaseSymptomRoutes);
    apiRoute.use('/admin',monitoringRoutes, medicalConsultationRoutes);

    apiRoute.use('/patients', questionRoutes);
    apiRoute.use('/foros', foroRoutes );

    // admin
    apiRoute.use('/admin', foroRoutes );








    router.use('/api',apiRoute);

    return router;
}