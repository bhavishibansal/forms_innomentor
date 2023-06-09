const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    // name: {
    //   type: String,
    //   //required: true,
    // },
    // email: {
    //   type: String,
    //   //required: true,
    // },
    // dob: {
    //   type: Date,
    //   //required: true,
    //   validate: [
    //     {
    //       validator: function (value) {
    //         return value <= new Date();
    //       },
    //       msg: "Date of birth cannot be in the future",
    //     },
    //   ],
    // },
    // contact: {
    //   type: Number,
    //   //required: true,
    //   validate: [
    //         {
    //           validator: Number.isInteger,
    //           msg: "Contact Number should be an integer",
    //         },
    //       ],
    // },
    // linkedln: {
    //   type: String,
    //   //required: true,
    // },
    // companyName: {
    //   type: String,
    //   //required: true,
    // },
    // companyAddress: {
    //   type: String,
    //   //required: true,
    // },
    // companyWebsite: {
    //   type: String,
    //   //required: true,
    // },
    // ideaDescription: {
    //   type: String,
    //   //required: true,
    // },
    // maxApplicants: {
    //   type: Number,
    //   validate: [
    //     {
    //       validator: Number.isInteger,
    //       msg: "maxApplicants should be an integer",
    //     },
    //     {
    //       validator: function (value) {
    //         return value > 0;
    //       },
    //       msg: "maxApplicants should greater than 0",
    //     },
    //   ],
    // },
    // maxPositions: {
    //   type: Number,
    //   validate: [
    //     {
    //       validator: Number.isInteger,
    //       msg: "maxPostions should be an integer",
    //     },
    //     {
    //       validator: function (value) {
    //         return value > 0;
    //       },
    //       msg: "maxPositions should greater than 0",
    //     },
    //   ],
    // },
    activeApplications: {
      type: Number,
      default: 0,
      validate: [
        {
          validator: Number.isInteger,
          msg: "activeApplications should be an integer",
        },
        {
          validator: function (value) {
            return value >= 0;
          },
          msg: "activeApplications should greater than equal to 0",
        },
      ],
    },
    acceptedCandidates: {
      type: Number,
      default: 0,
      validate: [
        {
          validator: Number.isInteger,
          msg: "acceptedCandidates should be an integer",
        },
        {
          validator: function (value) {
            return value >= 0;
          },
          msg: "acceptedCandidates should greater than equal to 0",
        },
      ],
    },
   
    name: {
      type: String,
      // validate: {
      //   validator: function(v) {
      //     return /^[a-zA-Z ]+$/.test(v);
      //   },
      //   message: "Name should contain only letters and spaces"
      // },
      default: ''
    },
    
    email: {
      type: String,
     default: '',
      // validate: [
      //   {
      //     validator: Number.isInteger,
      //     msg: "contact should be an integer",
      //   },
      //   {
      //     validator: function (value) {
      //       return value >= 0;
      //     },
      //     msg: "contact should greater than equal to 0",
      //   },
      // ],
    },
    dob: {
      type: Date,
      // validate: {
      //   validator: function(v) {
      //     return /^[a-zA-Z ]+$/.test(v);
      //   },
      //   message: "Name should contain only letters and spaces"
      // },
      default: ''
    },
    contact: {
      type: Number,
     default: '',
      // validate: [
      //   {
      //     validator: Number.isInteger,
      //     msg: "contact should be an integer",
      //   },
      //   {
      //     validator: function (value) {
      //       return value >= 0;
      //     },
      //     msg: "contact should greater than equal to 0",
      //   },
      // ],
    },
    linkedln: {
      type: String,
      
      default: ''
    },
    companyName: {
      type: String,
      // validate: {
      //   validator: function(v) {
      //     return /^[a-zA-Z ]+$/.test(v);
      //   },
      //   message: "Name should contain only letters and spaces"
      // },
      default: ''
    },
    companyAddress: {
      type: String,
      
      default: ''
    },
    companyWebsite: {
      type: String,
      // validate: {
      //   validator: function(v) {
      //     return /^[a-zA-Z ]+$/.test(v);
      //   },
      //   message: "Name should contain only letters and spaces"
      // },
      default: ''
    },
    // dateOfPosting: {
    //   type: Date,
    //   default: Date.now,
    // },
    // deadline: {
    //   type: Date,
    //   validate: [
    //     {
    //       validator: function (value) {
    //         return this.dateOfPosting < value;
    //       },
    //       msg: "deadline should be greater than dateOfPosting",
    //     },
    //   ],
    // },
    // skillsets: [String],
    // jobType: {
    //   type: String,
      
    // },
    // duration: {
    //   type: Number,
    //   min: 0,
    //   validate: [
    //     {
    //       validator: Number.isInteger,
    //       msg: "Duration should be an integer",
    //     },
    //   ],
    // },
    // salary: {
    //   type: Number,
    //   validate: [
    //     {
    //       validator: Number.isInteger,
    //       msg: "Salary should be an integer",
    //     },
    //     {
    //       validator: function (value) {
    //         return value >= 0;
    //       },
    //       msg: "Salary should be positive",
    //     },
    //   ],
    // },
    rating: {
      type: Number,
      max: 5.0,
      default: -1.0,
      validate: {
        validator: function (v) {
          return v >= -1.0 && v <= 5.0;
        },
        msg: "Invalid rating",
      },
    },
  },
  { collation: { locale: "en" } }
);

module.exports = mongoose.model("jobs", schema);
