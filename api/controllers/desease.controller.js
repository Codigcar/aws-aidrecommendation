class DeseaseController {


    constructor({ deseaseService }) {
        this._deseaseService = deseaseService;
    }

    async verifyTest(req, res) {
        res.send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessages(req, res) {

        // const { categoryDeseaseId } = req.params;

        try {
            const messages = await this._deseaseService.getAll();
            res.status(200).send({
                data: messages
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'Error'
            })
        }
    }

    async writeMessage(req, res) {
        // try {
        //     const { body } = req;
        //     const { categoryDeseaseId } = req.params;

        //     body.categoryDeseaseId = categoryDeseaseId;
        //     const message = await this._deseaseService.create(body);
            
        //     res.status(200).send({
        //         data: message
        //     })
        // } catch (err) {
        //     console.log(err);
        //     res.status(400).send({
        //         message: 'Error'
        //     })
        // }
    }

    async deleteMessage(req, res) {
        try {
            const { id } = req.params;
            await this._deseaseService.delete(id);
            res.send({
                status: "204",
                data: "Deleted successfully"
            })
        } catch (error) {
            console.log(err);
            res.status(400).send({
                message: 'Error'
            })
        }

    }

    async updateMessage(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;

            await this._deseaseService.update(id, body);
            res.send({
                status: "204",
                data: "Updated successfully"
            })

        } catch (error) {
            console.log(err);
            res.status(400).send({
                message: 'Error'
            })
        }
    }

    async getMessage(req, res) {
        try {
            const { id } = req.params;
            const message = await this._deseaseService.get(id);
            if (message) {
                return res.send({
                    status: "200",
                    data: message
                });
            }else{
                console.log(err);
                res.status(400).send({
                    message: 'Error'
                })
            }

        } catch (error) {
            console.log(err);
            res.status(400).send({
                message: 'Error'
            })
        }
    }
}

module.exports = DeseaseController;