let users = [
  { id: "1", name: "Handuman" },
  { id: "2", name: "Dacoroon" },
];

let tasks = [
  {
    id: "101",
    name: "Write GraphQL Query",
    categoryId: "201", // School
    priorityId: "301", // Low
    userId: "1", 
  },
  {
    id: "102",
    name: "Implement Task Mutation",
    categoryId: "202", // Personal
    priorityId: "302", // Medium
    userId: "1", 
  },
  {
    id: "103",
    name: "Design Database Schema",
    categoryId: "203", // Work
    priorityId: "303", // High
    userId: "1", 
  },
  {
    id: "104",
    name: "Setup GraphQL Server",
    categoryId: "201", // School
    priorityId: "301", // Low
    userId: "1", 
  },
  {
    id: "105",
    name: "Create Task Component",
    categoryId: "202", // Personal
    priorityId: "302", // Medium
    userId: "1", 
  },
  {
    id: "106",
    name: "Styling with CSS",
    categoryId: "203", // Work
    priorityId: "301", // High
    userId: "1", 
  },
  {
    id: "107",
    name: "Add Authentication",
    categoryId: "201", // School
    priorityId: "303", // Low
    userId: "1", 
  },
  {
    id: "108",
    name: "Testing and Debugging",
    categoryId: "202", // Personal
    priorityId: "302", // Medium
    userId: "1", 
  },
  {
    id: "109",
    name: "Write Unit Tests",
    categoryId: "203", // Work
    priorityId: "301", // Low
    userId: "2", 
  },
  {
    id: "110",
    name: "Integration Testing",
    categoryId: "201", // School
    priorityId: "302", // Medium
    userId: "2", 
  },
  {
    id: "111",
    name: "Deployment",
    categoryId: "202", // Personal
    priorityId: "303", // High
    userId: "2", 
  },
  // Add the rest of the tasks here
];

let categories = [
  { id: "201", name: "School" },
  { id: "202", name: "Personal" },
  { id: "203", name: "Work" }
];

let priorities = [
  { id: "301", level: "low" },
  { id: "302", level: "medium" },
  { id: "303", level: "high" },
];

export default { users, tasks, categories, priorities };
