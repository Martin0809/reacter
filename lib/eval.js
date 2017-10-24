const chalk = require('chalk');

module.exports = function evaluate (exp, data) {
  const fn = new Function('data', 'with (data) { return ' + exp + '}')

  try {
    return fn(data);
  } catch (e) {
    console.error(chalk.red('Error when evaluating filter condition: ' + exp));
  }
}
