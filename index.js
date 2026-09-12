// Welcome to my-first-project!
// This is a simple Node.js application

const greeting = () => {
  console.log("🎉 Welcome to my-first-project!");
  console.log("This is your first GitHub project!");
};

const getDate = () => {
  const date = new Date();
  return date.toLocaleString();
};

const main = () => {
  greeting();
  console.log(`Current time: ${getDate()}`);
  console.log("\n✅ Project is running successfully!");
};

// Run the application
main();

module.exports = { greeting, getDate };
