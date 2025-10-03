export default {
  spec_dir: ".",
  spec_files: [
    "**/*[sS]pec.?(m)js",
    "!node_modules/**"
  ],
  helpers: [
    "spec/helpers/**/*.?(m)js"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
