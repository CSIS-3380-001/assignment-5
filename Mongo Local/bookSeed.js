
DB_URI="mongodb+srv://127.0.0.1:27017/mylibrary?retryWrites=true&w=majority"


const mongoose = require('mongoose');
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  
module.exports = mongoose;