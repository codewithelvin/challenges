import JasmineConsoleReporter from "jasmine-console-reporter";

const reporter = new JasmineConsoleReporter({
  colors: 1, // 0 - no colors, 1 - yes colors
  cleanStack: 1, // 0 - no filter, 1 - filter
  verbosity: 4, // 0 - no output, 4 - full output
  listStyle: "indent", // "flat" or "indent"
  activity: false,
});

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(reporter);
