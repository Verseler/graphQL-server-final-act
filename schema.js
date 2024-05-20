export const typeDefs = `#graphql
# Types for each entities
  type User {
    id: ID!,
    name: String!,
    age: Int!,
    posts: [Post!]  # A user can have many posts
  }

  type Post {
    id: ID!,
    title: String!,
    description: String!,
    comments: [Comment!]  # A post can have many comments
    user: User!  # A post belongs to one user
  }

  type Comment {
    id: ID!,
    message: String!,
    post: Post!  # A comment belongs to one post
  }

# Entry points for queries
  type Query {
    user(id: ID!): User
    users: [User]
    post(id: ID!): Post
    posts: [Post]
    comment(id: ID!): Comment
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
`;
