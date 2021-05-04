class DeficitController {


    constructor({ deficitService, medicalHistoryService }) {
        this._deficitService = deficitService;
        this._medicalHistoryService = medicalHistoryService;
    }

    /*Write your all methods*/
    async verifyTest(req, res) {
        res.send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessages(req, res) {

        const { medicalHistroyId, patientId } = req.params;

        try {
            const getMedicalHistories = await this._medicalHistoryService.getByForeignKeyPatientId(patientId);

            if( getMedicalHistories.length === 0 ){
                return res.send({
                    msg: 'No hay historiales medicos del paciente'
                })
            }
            const getDeficits = await this._deficitService.getByForeignKeyMedicalHistoryId(getMedicalHistories[0].id);

            res.send({
                status: "200",
                data: getDeficits
            })
        } catch (err) {
            res.send({
                status: "404",
                message: err
            })
        }
    }

    async writeMessage(req, res) {
        try {
            const { body } = req;
            const { medicalHistroyId } = req.params;
            // // crear tabla medicalHistory 
            // const dataTemp = {};
            // dataTemp.patientId = patientId;
            
            // // get medicalHistory x id
            // let getMedicalHistoriesByPatientsId = {} 
            // // Busca medicalHistory x pacienteId
            // getMedicalHistoriesByPatientsId = await this._medicalHistoryService.getByForeignKeyPatientId(patientId);
            // // Crea medicalHistory si no hay
            // if( getMedicalHistoriesByPatientsId.length === 0 ){
                //     await this._medicalHistoryService.create(dataTemp);
                // }
                
                // // crear una sola medicalHistory
                // // const medicalHistoryDB = await this._medicalHistoryService.get(medicalHistroyId);
                // // if( !medicalHistoryDB ){
                    // //     await this._medicalHistoryService.create(dataTemp);
                    // // }
                    
            // // creando deficit
            // getMedicalHistoriesByPatientsId = await this._medicalHistoryService.getByForeignKeyPatientId(patientId);
            // body.medicalHistoryId = getMedicalHistoriesByPatientsId[0].id ;
            body.medicalHistoryId = medicalHistroyId;
            const message = await this._deficitService.create(body);

            res.status(200).send({
                payload: message
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'No se pudo insertar un deficit'
            })
        }
    }

    async deleteMessage(req, res) {
        try {
            const { id } = req.params;
            await this._deficitService.delete(id);
            res.status(200).send({
                data: "Deleted successfully"
            })
        } catch (error) {
            console.log(error);
            res.status(400).send({
                data: 'No se pudo eliminar'
            })
        }
    }

    async updateMessage(req, res) {
        try {
            const { body } = req;
            const { id, medicalHistroyId } = req.params;

            body.medicalHistoryId = medicalHistroyId;

            await this._deficitService.update(id, body);

            res.status(200).send({
                data: "Updated successfully"
            })

        } catch (error) {
            console.log(error);
            res.status(400).send({
                data:'No se puede actualizar'
            })
        }
    }

    async getMessage(req, res) {
        try {
            const { id } = req.params;
            const message = await this._deficitService.get(id);
            if (message) {
                return res.send({
                    status: "200",
                    payload: message
                });
            }else{
                return res.send({
                    status: "404",
                    payload: "Not found the element"
                });
            }

        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }
}

module.exports = DeficitController;