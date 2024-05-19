//local and temporary database
let users = [
  { id: "1", name: "Alice Johnson", age: 28 },
  {
    id: "2",
    name: "Bob Smith",
    age: 34,
  },
  {
    id: "3",
    name: "Catherine Green",
    age: 25,
  },
  {
    id: "4",
    name: "David Brown",
    age: 45,
  },
  {
    id: "5",
    name: "Eva Davis",
    age: 31,
  },
  {
    id: "6",
    name: "Frank Wilson",
    age: 22,
  },
  {
    id: "7",
    name: "Grace Lee",
    age: 37,
  },
  {
    id: "8",
    name: "Henry Adams",
    age: 29,
  },
];

let posts = [
  {
    id: "101",
    title: "Understanding GraphQL",
    description:
      "An introductory guide to GraphQL and how it compares to REST.",
  },
  {
    id: "102",
    title: "Advanced React Patterns",
    description:
      "Exploring advanced patterns and techniques in React development.",
  },
  {
    id: "103",
    title: "Machine Learning Basics",
    description:
      "A beginner's overview of machine learning concepts and algorithms.",
  },
  {
    id: "104",
    title: "Effective JavaScript",
    description:
      "Tips and tricks for writing clean and efficient JavaScript code.",
  },
  {
    id: "105",
    title: "CSS Grid vs Flexbox",
    description: "A comparison between CSS Grid and Flexbox for layout design.",
  },
  {
    id: "106",
    title: "Building RESTful APIs",
    description: "Best practices for building and designing RESTful APIs.",
  },
  {
    id: "107",
    title: "Introduction to Docker",
    description: "Getting started with Docker and containerization.",
  },
  {
    id: "108",
    title: "Data Structures and Algorithms",
    description:
      "An in-depth look at fundamental data structures and algorithms.",
  },
];

let comments = [
  {
    id: "1001",
    message: "Great article! Very informative.",
  },
  {
    id: "1002",
    message: "I found this post extremely helpful, thanks!",
  },
  {
    id: "1003",
    message: "Can you provide more examples on this topic?",
  },
  {
    id: "1004",
    message: "I disagree with some points made in this article.",
  },
  {
    id: "1005",
    message: "This was exactly what I was looking for, thanks!",
  },
  {
    id: "1006",
    message: "Please write more about this subject.",
  },
  {
    id: "1007",
    message: "Interesting perspective, I hadn't thought about it that way.",
  },
  {
    id: "1008",
    message: "Well written and easy to understand.",
  },
];

export default { users, posts, comments };
