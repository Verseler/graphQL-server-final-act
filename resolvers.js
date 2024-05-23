import db from "./local_db.js";
import mongoose from 'mongoose';
import StudentSchema from "./models/Student.model.js";
import AssignmentSchema from "./models/Assignment.model.js";

/**
 *
 ** These are the resolvers, they are codes that used to perform queries in
 ** the database based on the blueprint or schema defined
 *
 */

const resolvers = {
  // Resolvers for retrieving records
  Query: {
    async student(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);
      return await StudentSchema.findById(objectId).select('-__v');
    },
    async students() {
      return await StudentSchema.find().select('-__v');
    },
    assignment(_, args) {
      return db.assignments.find((assignment) => assignment.id === args.id);
    },
    assignments() {
      return db.assignments;
    },
    subject(_, args) {
      return db.subjects.find((subject) => subject.id === args.id);
    },
    subjects() {
      return db.subjects;
    },
    instructor(_, args) {
      return db.instructors.find((instructor) => instructor.id === args.id);
    },
    instructors() {
      return db.instructors;
    },
  },

  // Resolver for related entities/tables
  Student: {
    assignments(parent) {
      return db.assignments.filter((assignment) => assignment.studentId === parent.id);
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
      return db.subjects.filter((subject) => parent.subjects.includes(subject.id));
    },
  },

  // Resolvers for Create, Update, & Delete operations
  Mutation: {

    // Resolver functions for Students' mutation
    async addStudent(_, args) {
      const student = new StudentSchema(args.student);
      const result = await student.save();
      
      return result;
    },

    async deleteStudent(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);
    
      await StudentSchema.findByIdAndDelete(objectId).select('-__v');
      const result = await StudentSchema.find().select('-__v');

      return result;
    },
    
    async updateStudent(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);

      await StudentSchema.findByIdAndUpdate(objectId, args.edits).select('-__v');
      const result = await StudentSchema.find().select('-__v');

      return result;
    },

    // Resolver functions for Assignments' mutation
    async addAssignment(_, args) {
      const assignment = new AssignmentSchema(args.assignment);
      const result = await assignment.save();
      
      return result;
    },
    async deleteAssignment(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);
    
      await AssignmentSchema.findByIdAndDelete(objectId).select('-__v');
      const result = await AssignmentSchema.find().select('-__v');

      return result;
    },
    async updateAssignment(_, args) {
      const objectId = new mongoose.Types.ObjectId(args.id);

      await AssignmentSchema.findByIdAndUpdate(objectId, args.edits).select('-__v');
      const result = await AssignmentSchema.find().select('-__v');

      return result;
    },
  },
};

export default resolvers;
