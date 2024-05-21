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
    user(_, args) {
      return db.users.find((user) => user.id === args.id);
    },
    users() {
      return db.users;
    },
    task(_, args) {
      return db.tasks.find((task) => task.id === args.id);
    },
    tasks() {
      return db.tasks;
    },
    category(_, args) {
      return db.categories.find((category) => category.id === args.id);
    },
    categories() {
      return db.categories;
    },
    priority(_, args) {
      return db.priorities.find((priority) => priority.id === args.id);
    },
    priorities() {
      return db.priorities;
    },
  },

  // Resolver for related entities/tables
  User: {
    tasks(parent) {
      return db.tasks.filter((task) => task.userId === parent.id);
    },
  },
  Task: {
    category(parent) {
      return db.categories.find(
        (category) => category.id === parent.categoryId
      );
    },
    priority(parent) {
      return db.priorities.find(
        (priority) => priority.id === parent.priorityId
      );
    },
    user(parent) {
      return db.users.find((user) => user.id === parent.userId);
    },
  },

  // Resolvers for Create, Update, & Delete operations
  Mutation: {
    addTask(_, args) {
      const newTask = {
        ...args.task,
        id: Math.floor(Math.random() * 10000), // Temporary solution in generating ID
      };

      db.tasks.push(newTask);

      return newTask;
    },
    deleteTask(_, args) {
      db.tasks = db.tasks.filter((task) => task.id !== args.id);

      return db.tasks;
    },
    updateTask(_, args) {
      db.tasks = db.tasks.map((task) => {
        if (task.id === args.id) {
          console.log({ ...task, ...args.edits })
          return { ...task, ...args.edits };

        }

        return task;
      });
      return db.tasks.find((task) => task.id === args.id);
    },
  },
};

export default resolvers;
