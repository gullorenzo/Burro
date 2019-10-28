const app = require('./config/express')();

require('./config/database');

app.listen(app.get('port'), () => {
    console.log('running at port 3001....');
    
});