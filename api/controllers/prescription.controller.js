class PrescriptionController {


    constructor({ prescriptionService }) {
        this._prescriptionService = prescriptionService;
    }

    /*Write your all methods*/
    async verifyTest(req, res) {
        res.send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessages(req, res) {

        try {
            const messages = await this._prescriptionService.getAll();
            res.send({
                status: "200",
                payload: messages
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
            const message = await this._prescriptionService.create(body);
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
            await this._prescriptionService.delete(id);
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
        console.log('updateMessage');
        try {
            const { body } = req;
            const { id } = req.params;

            const { userId }= await this._prescriptionService.get(id);

            body.userId = userId;


            await this._prescriptionService.update(id, body);
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
            const message = await this._prescriptionService.get(id);
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

module.exports = PrescriptionController;