class SymptomController {


    constructor({ symptomService }) {
        this._symptomService = symptomService;
    }

    /*Write your all methods*/
    async verifyTest(req, res) {
        res.send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessages(req, res) {

        try {
            const messages = await this._symptomService.getAll();
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
            const message = await this._symptomService.create(body);
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
            await this._symptomService.delete(id);
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

            const { userId }= await this._symptomService.get(id);

            body.userId = userId;


            await this._symptomService.update(id, body);
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
            const message = await this._symptomService.get(id);
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

module.exports = SymptomController;