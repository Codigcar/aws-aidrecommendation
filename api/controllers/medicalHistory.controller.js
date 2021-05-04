class MedicalHistoryController {


    constructor({ medicalHistoryService, patientService }) {
        this._medicalHistoryService = medicalHistoryService;
        this._patientService = patientService;
    }

    /*Write your all methods*/
    async verifyTest(req, res) {
        res.send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessages(req, res) {

        const { patientId } = req.params;

        try {
            const getMedicalHistories = await this._medicalHistoryService.getAllByPatientId(patientId);
            
            res.status(200).send({
                getMedicalHistories
                // getPatientById
            })
        } catch (err) {
            console.log(err);
            res.status(404).send({
                message: "Error, no pudo completar la peticion"
            })
        }
    }

    async writeMessage(req, res) {
        try {
            const { body } = req;
            const { patientId } = req.params;

            data.patientId = patientId;
            await this._medicalHistoryService.create(data);
            
            res.send({
                status: "200",
                payload: message
            })
        } catch (err) {
            console.log(err);
            res.send({
                status: "4044",
                message: err
            })
        }
    }

    async deleteMessage(req, res) {
        try {
            const { id } = req.params;
            await this._medicalHistoryService.delete(id);
            res.send({
                status: "204",
                payload: "Deleted successfully"
            })
        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }

    }

    async updateMessage(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;

            await this._medicalHistoryService.update(id, body);
            res.send({
                status: "204",
                payload: "Updated successfully"
            })

        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }

    async getMessage(req, res) {
        try {
            const { id } = req.params;
            const message = await this._medicalHistoryService.get(id);
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

module.exports = MedicalHistoryController;