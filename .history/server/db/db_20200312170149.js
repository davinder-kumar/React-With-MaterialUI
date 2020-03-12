const mongoose = require('mongoose');
mongoose.connect('loca', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports=mongoose;    


// export default db;