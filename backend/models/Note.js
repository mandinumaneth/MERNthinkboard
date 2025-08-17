import mongoose from "mongoose";

//1st step: Define the schema for the Note model
//2nd step: Create the model using the schema
//3rd step: Export the model for use in other parts of the application

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

},{ timestamps: true } // Automatically manage createdAt and updatedAt fields
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
