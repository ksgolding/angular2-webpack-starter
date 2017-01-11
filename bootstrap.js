/**
 * Script copies the bootstrap-4 source files from the npm
 * folder to the src/assets folder so it can be built and
 * packed locally
 */
var fs = require("fs-extra");

fs.copySync("node_modules/tether/dist", "src/assets/tether");
fs.copySync("node_modules/bootstrap/js/src", "src/assets/bootstrap/js");
fs.copySync("node_modules/bootstrap/scss", "src/assets/bootstrap/scss", {
    filter: function(path) {
        return !/.*_custom.scss/g.test(path);
    }
});

// Ensure the bootstrap _custom file exists, but do not overwrite.
try {
    fs.copySync("node_modules/bootstrap/scss/_custom.scss", "src/assets/bootstrap/scss/_custom.scss", {clobber: false});
} catch(err) {
    console.log("src/assets/bootstrap/scss/_custom.scss already exists, skipping");
}