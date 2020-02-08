module.exports = (app) => {

    const countController = require("../controllers/count.controller.js");

    app.get('/:site', countController.read);
    app.post('/:site', countController.write);

}
