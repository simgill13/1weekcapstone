const mongoose = require('mongoose');


const housingSchema = mongoose.Schema({
  types: [String]
})

// virtuals
// api reps


const Houses = mongoose.model('Houses', housingSchema);

module.exports = {Houses};
