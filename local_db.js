let students = [
  { id: "1", name: "Handuman" },
  { id: "2", name: "Dacoroon" },
];

let assignments = [
  {
    id: "101",
    name: "Math Homework 1",
    subjectId: "201", // Math
    dueDate: "2024-06-01",
    studentId: "1",
  },
  {
    id: "102",
    name: "Science Project",
    subjectId: "202", // Science
    dueDate: "2024-06-05",
    studentId: "1",
  },
  {
    id: "103",
    name: "History Essay",
    subjectId: "203", // History
    dueDate: "2024-06-10",
    studentId: "1",
  },
  {
    id: "104",
    name: "Math Homework 2",
    subjectId: "201", // Math
    dueDate: "2024-06-15",
    studentId: "1",
  },
  {
    id: "105",
    name: "English Assignment",
    subjectId: "204", // English
    dueDate: "2024-06-20",
    studentId: "1",
  },
  {
    id: "106",
    name: "Art Project",
    subjectId: "205", // Art
    dueDate: "2024-06-25",
    studentId: "1",
  },
  {
    id: "107",
    name: "Math Homework 3",
    subjectId: "201", // Math
    dueDate: "2024-07-01",
    studentId: "1",
  },
  {
    id: "108",
    name: "Science Experiment",
    subjectId: "202", // Science
    dueDate: "2024-07-05",
    studentId: "1",
  },
  {
    id: "109",
    name: "History Presentation",
    subjectId: "203", // History
    dueDate: "2024-07-10",
    studentId: "2",
  },
  {
    id: "110",
    name: "English Essay",
    subjectId: "204", // English
    dueDate: "2024-07-15",
    studentId: "2",
  },
  {
    id: "111",
    name: "Art Exhibition",
    subjectId: "205", // Art
    dueDate: "2024-07-20",
    studentId: "2",
  },
  // Add the rest of the assignments here
];

let subjects = [
  { id: "201", name: "Math", subjectCode: "MATH101" },
  { id: "202", name: "Science", subjectCode: "SCI101" },
  { id: "203", name: "History", subjectCode: "HIST101" },
  { id: "204", name: "English", subjectCode: "ENG101" },
  { id: "205", name: "Art", subjectCode: "ART101" },
];

let instructors = [
  { id: "1", name: "Professor X", subjects: ["201", "202"] },
  { id: "2", name: "Dr. Y", subjects: ["203", "204"] },
  { id: "3", name: "Ms. Z", subjects: ["205"] },
];

export default { students, assignments, subjects, instructors };
