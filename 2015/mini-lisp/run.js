// http://stackoverflow.com/questions/25803420/how-to-compile-clojurescript-to-nodejs
try {
    require("source-map-support").install();
} catch(err) {
}
require("./target/goog/bootstrap/nodejs.js");
require("./target/lisp.js");
require("./target/mini_lisp/core");
mini_lisp.core._main();
