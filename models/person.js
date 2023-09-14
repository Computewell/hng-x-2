import { Schema, model } from "mongoose";

const personSchema = new Schema({
  name: {
    type: String,
    required: [true, "'Name' field is required"],
  },
},
  {
    timestamps: true,
  }
);

const Person = model("Person", personSchema);

export default Person;
