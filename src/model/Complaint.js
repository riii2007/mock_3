const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required:[ true, "student name is requried"],
     
    },

    email: {
      type: String,
      required: [ true, "email is requried"],
    },

    title: {
      type: String,
      required: true,
     
    },

    description: {
      type: String,
      required: true,
     
    },

    category: {
      type: String,
      enum: ["Infrastructure", "IT", "Cleanliness", "Security", "Other"],
      
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true,
    },

    location: {
      type: String,
     
    },

    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved", "Rejected"],
      default: "Open",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Complaint", complaintSchema);