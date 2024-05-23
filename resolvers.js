


import db from "./local_db.js";
import mongoose from "mongoose";
import StudentSchema from "./models/Student.model.js";
import AssignmentSchema from "./models/Assignment.model.js";
import InstructorSchema from "./models/Instructor.model.js";
import SubjectSchema from "./models/Subject.model.js";

/**
 *
 ** These are the resolvers, they are codes that used to perform queries in
 ** the database based on the blueprint or schema defined
 *
 */

const resolvers = {
  // Resolvers for retrieving records
  Query: {
    // Get a single student by ID
    async student(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id); // Convert the provided string ID to a MongoDB ObjectId
      return await StudentSchema.findById(objectId).select("-__v"); // Find the student by the ObjectId 
    },
    // Get all students
    async students() {
      return await StudentSchema.find().select("-__v"); // Retrieve all student records
    },

    // Get a single assignment by ID
    async assignment(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);
      return await AssignmentSchema.findById(objectId).select("-__v");
    },
    // Get all assignments
    async assignments() {
      return await AssignmentSchema.find().select("-__v");
    },

    // Get a single subject by ID
    async subject(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);
      return await SubjectSchema.findById(objectId).select("-__v");
    },
    // Get all subjects
    async subjects() {
      return await SubjectSchema.find().select("-__v");
    },

    // Get a single instructor by ID
    async instructor(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);
      return await InstructorSchema.findById(objectId).select("-__v");
    },
    // Get all instructors
    async instructors() {
      return await InstructorSchema.find().select("-__v");
    },
  },

  // Resolver for related entities/tables
  Student: {
    assignments(parent) {
      return db.assignments.filter(
        (assignment) => assignment.studentId === parent.id
      );
    },
  },
  Assignment: {
    subject(parent) {
      return db.subjects.find((subject) => subject.id === parent.subjectId);
    },
    student(parent) {
      return db.students.find((student) => student.id === parent.studentId);
    },
  },
  Instructor: {
    subjects(parent) {
      return db.subjects.filter((subject) =>
        parent.subjects.includes(subject.id)
      );
    },
  },

  // Resolvers for Create, Update, & Delete operations
  Mutation: {
    // Resolver functions for Instructor' mutation
    // Add a new instructor
    async addInstructor(_, args) {
      const instructor = new InstructorSchema(args.instructor); // Create a new Instructor using the provided input
      const result = await instructor.save(); // Save the new instructor to the mongodb

      return result;
    },
    // Delete an instructor by ID
    async deleteInstructor(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id); // Convert the provided string ID to a MongoDB ObjectId

      await InstructorSchema.findByIdAndDelete(objectId).select("-__v"); // Delete the instructor by the ObjectId
      const result = await InstructorSchema.find().select("-__v"); // Retrieve all remaining instructor records

      return result;
    },
    // Update an instructor by ID
    async updateInstructor(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id); // Convert the provided string ID to a MongoDB ObjectId

      await InstructorSchema.findByIdAndUpdate(objectId, args.edits).select(
        "-__v"
      ); // Update the instructor document by the ObjectId
      const result = await InstructorSchema.find().select("-__v"); // Retrieve all instructor records

      return result;
    },

    // Resolver functions for Students' mutation
    // Add a new student
    async addStudent(_, args) {
      const student = new StudentSchema(args.student);
      const result = await student.save();

      return result;
    },

    // Delete a student by ID
    async deleteStudent(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);

      await StudentSchema.findByIdAndDelete(objectId).select("-__v");
      const result = await StudentSchema.find().select("-__v");

      return result;
    },

    // Update a student by ID
    async updateStudent(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);

      await StudentSchema.findByIdAndUpdate(objectId, args.edits).select(
        "-__v"
      );
      const result = await StudentSchema.find().select("-__v");

      return result;
    },

    // Resolver functions for Subjects' mutation
    // Add a new subject
    async addSubject(_, args) {
      const subject = new SubjectSchema(args.subject);
      const result = await subject.save();

      return result;
    },
    // Delete a subject by ID
    async deleteSubject(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);

      await SubjectSchema.findByIdAndDelete(objectId).select("-__v");
      const result = await SubjectSchema.find().select("-__v");

      return result;
    },
    // Update a subject by ID
    async updateSubject(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);

      await SubjectSchema.findByIdAndUpdate(objectId, args.edits).select(
        "-__v"
      );
      const result = await SubjectSchema.find().select("-__v");

      return result;
    },

    // Resolver functions for Assignments' mutation
    // Add a new assignment
    async addAssignment(_, args) {
      const assignment = new AssignmentSchema(args.assignment);
      const result = await assignment.save();

      return result;
    },
    // Delete an assignment by ID
    async deleteAssignment(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);

      await AssignmentSchema.findByIdAndDelete(objectId).select("-__v");
      const result = await AssignmentSchema.find().select("-__v");

      return result;
    },
    // Update an assignment by ID
    async updateAssignment(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);

      await AssignmentSchema.findByIdAndUpdate(objectId, args.edits).select(
        "-__v"
      );
      const result = await AssignmentSchema.find().select("-__v");

      return result;
    },
  },
};

export default resolvers;
