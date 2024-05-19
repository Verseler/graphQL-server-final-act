export const typeDefs = `#graphql
# Types for each entities
  type User {
    id: ID!,
    name: String!,
    age: Int!
  }

  type Post {
    id: ID!,
    title: String!,
    description: String!,
  }

  type Comment {
    id: ID!,
    message: String!
  }

# Entry points for queries
  type Query {
    users: [User]
    posts: [Post]
    comments: [Comment]
  }

# Entry points that provide CRUD actions to data in the database
  type Mutation {
    deleteUser(id: ID!): [User]
    addUser(user: AddUserInput): User
    updateUser(id: ID!, edits: EditUserInput): User
  }


# Arguments that are group together 
  input AddUserInput {
    name: String!,
    age: Int!
  }
# Arguments that are group together 
  input EditUserInput {
    name: String,
    age: Int
  }
`