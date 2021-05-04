

class ExampleController {


    constructor({ userService}) {
        this._userService = userService;
    }

    async jwt() {
        const data = await this._userService.get(11);
        console.log(data);

        // res.send({
        //     message: "Hellos, this is a Test"
        // })
    }
}

module.exports = ExampleController;