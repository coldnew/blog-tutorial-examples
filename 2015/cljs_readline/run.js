// http://stackoverflow.com/questions/25803420/how-to-compile-clojurescript-to-nodejs
try {
    require("source-map-support").install();
} catch(err) {
}
require("./target/goog/bootstrap/nodejs.js");
require("./target/cljs_readline.js");
require("./target/cljs_readline/core");
cljs_readline.core._main(process.argv[2]); // passing argument