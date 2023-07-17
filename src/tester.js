module.exports = (pinoInstance) => {
  pinoInstance.trace("This is an trace message.");
  pinoInstance.debug("This is a debug message.");
  pinoInstance.info("This is an info message.");
  pinoInstance.udebug("This is a user debug message.");
  pinoInstance.uinfo("This is a user info message.");
  pinoInstance.uwarn("This is a user warn message.");
  pinoInstance.uerror("This is a user error message.");
  pinoInstance.warn("This is a warning message.");
  pinoInstance.error(new Error("test error message"), "This is an error message.");
  pinoInstance.fatal([
    "This is a fatal message.",
    "another"
  ]);
}
