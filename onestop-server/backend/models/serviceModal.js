const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    service: {
        sub_service: [{
            _id: { type: String },
            name: { type: String },
            description: { type: String },
            category: { type: String },
            price: { type: Number },
            image: { type: String },
        }]
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('Service', serviceSchema)