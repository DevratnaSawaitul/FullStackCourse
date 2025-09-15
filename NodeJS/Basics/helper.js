function greet() {
  console.log("helper");
}

module.exports = greet;
// ejs-> import greet from './helper.js'
// cjs-> module.exports = greet; i.e. requires(./name of module)