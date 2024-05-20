import db from "./_db.js";

/**
 * 
 ** These are the resolvers, they are codes that used to perform queries in
 ** the database based on the blueprint or schema defined
 * 
 */

const resolvers = {
  // Resolvers for retrieving records
  Query: {
    user(_, args) {
      return db.users.find((user) => user.id === args.id)
    },
    users() {
      return db.users;
    },
    post(_, args) {
      return db.posts.find((post) => post.id === args.id)
    },
    posts() {
      return db.posts;
    },
    comment(_, args) {
      return db.comments.find((comment) => comment.id === args.id)
    },
    comments() {
      return db.comments;
    },
  },
  
  // Resolver for related entities/tables
  User: {
    posts(parent) {
      return db.posts.filter((posts) => posts.user_id === parent.id)
    }
  },
  Post: {
    comments(parent) {
      return db.comments.filter((comments) => comments.post_id === parent.id)
    },
    user(parent) {
      return db.users.find((users) => users.id === parent.user_id)
    }
  },
  Comment: {
    post(parent) {
      return db.posts.find((posts) => posts.id === parent.post_id)
    }
  },

  // Resolvers for Create, Update, & Delete operations (User modification as of now)
  Mutation: {
    deleteUser(_, args) {
      db.users = db.users.filter((u) => u.id !== args.id);

      return db.users;
    },
    addUser(_, args) {
      const newUser = {
        ...args.user,
        id: Math.floor(Math.random() * 10000), //temporary solution in generating ID
      };

      db.users.push(newUser);

      return newUser;
    },
    updateUser(_, args) {
      db.users = db.users.map((u) => {
        if (u.id === args.id) {
          return { ...u, ...args.edits };
        }

        return u;
      });

      return db.users.find((u) => u.id === args.id);
    },
  },
};

export default resolvers;
