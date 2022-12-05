const { Schema } = require('mongoose');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const url = "mongodb+srv://GauravMG:pXV6QK4lCuqnpM88@hw5.eoz2llk.mongodb.net/?retryWrites=true&w=majority"

const usersSchema = Schema({
    userName: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please add a mobile number'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
}, {collection : "Users", timestamps: true });

const professionalSchema = Schema({
    userName: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please add a mobile number'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    address:{
        type:String,
        required: [true,'Please add an address']
    },
    service:{
        type:String,
        required: [true,'Please add a service']
    }
}, {collection : "Professional", timestamps: true });

const serviceSchema = Schema( {
    category: { type: String },
    sub_category: [{
        subCategoryName: {type:String},
        services:[{
            _id: { type: String },
            name: { type: String },
            description: { type: String },
            category: { type: String },
            price: { type: Number },
            image: { type: String },
        }]
        },]
}, {collection: "Services"} )
let connection = {}

//Returns model object of "Users" collection
connection.getCollection = () => {
    //establish connection and return model as promise
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then( database => {
        return database.model('Users', usersSchema)
    }).catch( error => {
        let err = new Error("Could not connect to the database");
        err.status = 500;
        throw err;
    });
}

connection.getProductCollection = () => {
    //establish connection and return model as promise
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then( database => {
        return database.model('Services',serviceSchema)
    }).catch( error => {
        let err = new Error("Could not connect to the database");
        err.status = 500;
        throw err;
    });
}

connection.getProfessionalCollection = () => {
    //establish connection and return model as promise
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then( database => {
        return database.model('Professional',professionalSchema)
    }).catch( error => {
        let err = new Error("Could not connect to the database");
        err.status = 500;
        throw err;
    });
}

module.exports = connection;