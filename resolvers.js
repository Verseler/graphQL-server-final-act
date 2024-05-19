import db from "./_db.js";

// Resolvers define how to fetch the types defined in your schema.
// It connects GraphQL and data source
const resolvers = {
  Query: {
    users() {
      return db.users;
    },
    posts() {
      return db.posts;
    },
    comments() {
      return db.comments;
    },
  },
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
