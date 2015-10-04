// http://stackoverflow.com/questions/25803420/how-to-compile-clojurescript-to-nodejs
try {
    require("source-map-support").install();
} catch(err) {
}
require("./target/goog/bootstrap/nodejs.js");
require("./target/readline.js");
require("./target/readline/example3");
readline.example3._main();
