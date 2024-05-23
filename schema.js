const typeDefs = `#graphql
# Types for each entities
type Task {
    id: ID!,
    name: String!,
    category: Category, # a task can have category
    priority: Priority, # a task can have priority level
    user: User! # a task belong to a user
}

  
type User {
    id: ID!,
    name: String!,
    tasks: [Task!] # a user can have many tasks
  }

  type Category {
    id: ID!,
    name: String!,
  }

  type Priority {
    id: ID!,
    level: String!,
  }

# Entry points for queries
type Query {
    task(id: ID!): Task
    tasks: [Task]
    category(id: ID!): Category
    categories: [Category]
    priority(id: ID!): Priority
    priorities: [Priority]
    user(id: ID!): User
    users: [User]
  }

# Entry points that provide CRUD actions to data in the database
  type Mutation {
    # We only created mutation entry points for task
    addTask(task: AddTaskInput!): Task
    deleteTask(id: ID!): [Task]
    updateTask(id: ID!, edits: EditTaskInput!): Task
    addUser(user: AddUserInput!): User
  }

input AddUserInput {
  name: String!
}

# Arguments that are group together 
  input AddTaskInput {
    name: String!,
    categoryId: ID,
    priorityId: ID,
    userId: ID!
  }

  input EditTaskInput {
    name: String,
    categoryId: ID,
    priorityId: ID,
  }
`;

export default typeDefs;
