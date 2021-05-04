const ExampleController = require("./example.controller");
// const validateJWT = require('../../middlewares/validate-jwt');


class TestController {


    constructor({ testService, exampleController, validateJWT }) {
        this._testService = testService;
        this._exampleController = exampleController;
        this._validateJWT = validateJWT;
    }

    /*Write your all methods*/
    async verifyTest(req, res) {
        console.log('log');
        this._validateJWT.validateJWTMetodo()
    }

    async getMessages(req, res) {

        try {
            const messages = await this._testService.getAll();
            res.send({
                status: "200",
                payload: messages
            })
        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }

    async writeMessage(req, res) {
        try {
            const { body } = req;
            const message = await this._testService.create(body);
            res.send({
                status: "200",
                payload: message
            })
        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }

    async deleteMessage(req, res) {
        try {
            const { id } = req.params;
            await this._testService.delete(id);
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

            await this._testService.update(id, body);
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
            const message = await this._testService.get(id);
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

module.exports = TestController;