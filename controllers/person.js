import Person from "../models/person.js";

// @desc Create a new person from the request body
const createPerson = async (req, res) => {
  const { name } = req.body;
  const person = await Person.create({ name });
  res.status(201).json({ person });
};

// @desc Get a person by id from the database
const getPerson = async (req, res) => {
  const PersonId = req.params.id;
  try {
    // Find person in the database
    const person = await Person.findById(PersonId);
    // Validate if person is found
    if (person) {
      res.status(200).json({ person });
    } else {
      res.status(404).json({ message: "Person name not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// @desc Update a person by id from the database
const updatePerson = async (req, res) => {
  const personId = req.params.id;
  const { name } = req.body;
  try {
    // Validate name input
    if (!name || typeof name !== "string") {
      return res.status(400).json({ message: "Invalid user data" });
    }
    // Find and update person in the database
    const updatedPerson = await Person.findByIdAndUpdate(
      personId,
      { name },
      { new: true }
    );
    // Validate if person is found
    if (updatedPerson) {
      res.status(200).json({ person: updatedPerson });
    } else {
      res.status(404).json({ message: "Person name not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// @desc Delete a person by id from the database
const deletePerson = async (req, res) => {
  const personId = req.params.id;
  try {
    // Find and delete person in the database
    const deletedPerson = await Person.findByIdAndDelete(personId);
    // Validate if person is found
    if (deletedPerson) {
      res.status(200).json({ person: deletedPerson });
    } else {
      res.status(404).json({ message: "Person name not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
export { createPerson, getPerson, updatePerson, deletePerson };
