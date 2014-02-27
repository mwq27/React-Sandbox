'use strict';

var app = require('express')();

//Configuration
require('./config/config')(app);

//Database
require('./config/mongo')(app);

//Express
require('./config/express')(app);

//Routing
require('./routes/app')(app);
require('./routes/api/auth')(app);
require('./routes/api/contacts')(app);

//Expose
module.exports = app;