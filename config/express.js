const bodyParser = require('body-parser');

module.exports =(app)=>{
    app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
    app.use(bodyParser.json({ limit: '50mb' }));
};
