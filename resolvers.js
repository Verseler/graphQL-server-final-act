import db from "./local_db.js";

/**
 *
 ** These are the resolvers, they are codes that used to perform queries in
 ** the database based on the blueprint or schema defined
 *
 */

const resolvers = {
  // Resolvers for retrieving records
  Query: {
    student(_, args) {
      return db.students.find((student) => student.id === args.id);
    },
    students() {
      return db.students;
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
    addAssignment(_, args) {
      const newAssignment = {
        ...args.assignment,
        id: Math.floor(Math.random() * 10000).toString(), // Temporary solution in generating ID
      };

      db.assignments.push(newAssignment);

      return newAssignment;
    },
    deleteAssignment(_, args) {
      db.assignments = db.assignments.filter((assignment) => assignment.id !== args.id);

      return db.assignments;
    },
    updateAssignment(_, args) {
      db.assignments = db.assignments.map((assignment) => {
        if (assignment.id === args.id) {
          return { ...assignment, ...args.edits };
        }

        return assignment;
      });
      return db.assignments.find((assignment) => assignment.id === args.id);
    },
  },
};

export default resolvers;
