
const { readExcel, readExcelSymptoms } = require("../../helpers/readExcel");

class CategoryDeseaseController {


    constructor({ categoryDeseaseService,doctorController }) {
        this._categoryDeseaseService = categoryDeseaseService;
        this._doctorController = doctorController;


    }


    async verifyTest(req, res) {

        readExcelSymptoms();

        res.status(200).send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessages(req, res) {
        console.log('------------');
        try {
            const messages = await this._categoryDeseaseService.getAll();
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
        try {
            const dataExcel = await readExcel();
            // console.log(dataExcel);
            // const { body } = req;
            for (const itemFila of dataExcel) {
                /* const message = */ await this._categoryDeseaseService.create({Nombre:itemFila});
            }


            // res.status(200).send({
            //     data: message
            // })
        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'Error'
            })
        }
    }

    async deleteMessage(req, res) {
        try {
            const { id } = req.params;
            await this._categoryDeseaseService.delete(id);
            res.status(200).send({
                data: "Deleted successfully"
            })
        } catch (err) {
            console.log(err);
            res.send({
                message: 'Error'
            })
        }

    }

    async updateMessage(req, res) {
        console.log('updateMessage');
        try {
            const { body } = req;
            const { id } = req.params;

            const { userId }= await this._categoryDeseaseService.get(id);

            body.userId = userId;


            await this.categoryDeseaseService.update(id, body);
            res.status(200).send({
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
            const message = await this._categoryDeseaseService.get(id);
            if (message) {
                return res.send({
                    status: "200",
                    data: message
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

module.exports = CategoryDeseaseController;
