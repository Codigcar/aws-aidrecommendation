class ForoController {


    constructor({ foroService }) {
        this._foroService = foroService;
    }

    /*Write your all methods*/
    async verifyTest(req, res) {
        res.send({
            message: "Hellos, this is a Test"
        })
    }

    async getMessages(req, res) {

        // const { medicalHistroyId, patientId } = req.params;
        const foro = await this._foroService.getAllWithAnswers();

        try {
            res.status(200).send({
                data: foro
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({
                message: 'No se pudo procesar la solicitud'
            })
        }
    }

    async writeMessage(req, res) {
        try {
            const { body } = req;
            // const { medicalHistroyId } = req.params;
           
            const foro = await this._foroService.create(body);

            res.status(200).send({
                data: foro
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({
                data: 'No se pudo insertar pregunta/respuesta'
            })
        }
    }

    async deleteMessage(req, res) {
        // try {
        //     const { id } = req.params;
        //     await this._deficitService.delete(id);
        //     res.status(200).send({
        //         data: "Deleted successfully"
        //     })
        // } catch (error) {
        //     console.log(error);
        //     res.status(400).send({
        //         data: 'No se pudo eliminar'
        //     })
        // }
    }

    async updateMessage(req, res) {
        try {
            const { body } = req;
            const { foroId } = req.params;

            await this._foroService.update(foroId, body);

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
        // try {
        //     const { id } = req.params;
        //     const message = await this._deficitService.get(id);
        //     if (message) {
        //         return res.send({
        //             status: "200",
        //             payload: message
        //         });
        //     }else{
        //         return res.send({
        //             status: "404",
        //             payload: "Not found the element"
        //         });
        //     }

        // } catch (error) {
        //     res.send({
        //         status: "404",
        //         message: error
        //     })
        // }
    }
}

module.exports = ForoController;