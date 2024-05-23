const typeDefs = `#graphql
# Types for each entity
type Assignment {
    id: ID!,
    name: String!,
    subject: Subject!, # an assignment belongs have a subject
    dueDate: String, # an assignment can have a due date
    student: Student! # an assignment belongs to a student
}

type Student {
    id: ID!,
    name: String!,
    assignments: [Assignment!] # a student can have many assignments
}

type Subject {
    id: ID!,
    name: String!,
    subjectCode: String!,
}

type Instructor {
    id: ID!,
    name: String!,
    subjects: [Subject!] # an instructor can teach many subjects
}

# Entry points for queries
type Query {
    assignment(id: ID!): Assignment
    assignments: [Assignment]
    subject(id: ID!): Subject
    subjects: [Subject]
    student(id: ID!): Student
    students: [Student]
    instructor(id: ID!): Instructor
    instructors: [Instructor]
}

# Entry points that provide CRUD actions to data in the database
type Mutation {
    # Student mutations
    addStudent(student: AddStudentInput!): Student
    deleteStudent(id: String!): [Student]
    updateStudent(id: String!, edits: EditStudentInput!): [Student]


    # We only created mutation entry points for assignment
    addAssignment(assignment: AddAssignmentInput!): Assignment
    deleteAssignment(id: String!): [Assignment]
    updateAssignment(id: String!, edits: EditAssignmentInput!): [Assignment]
}

# Parameters for User entity
input AddStudentInput {
  name: String!
}

input EditStudentInput {
    name: String
}

# Parameters for Assignment entity
input AddAssignmentInput {
    name: String!,
    subjectId: ID!,
    dueDate: String,
    studentId: ID!
}

input EditAssignmentInput {
    name: String,
    subjectId: ID,
    dueDate: String,
}
`;

export default typeDefs;
