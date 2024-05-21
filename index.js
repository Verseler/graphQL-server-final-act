/**
 *
 ** Verseler Kerr Handuman
 ** Christian Jericho A. Dacoroon
 ** IT - 3R7
 *
 */

// Import necessary dependencies from apollo
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// We separated resolvers in separate files so need to import
import resolvers from "./resolvers.js"; 

// Same with schema definition
import typeDefs from "./schema.js";

// Create server instance and pass schema & resolver as arguments
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start server and configure port
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

// Log server and port port it runs
console.log("Server ready at port ", url);
