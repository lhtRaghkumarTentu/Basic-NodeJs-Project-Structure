import {stringConstants} from "../app/common/constants";


module.exports = (app) => {

    app.get('/', (req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));

};
