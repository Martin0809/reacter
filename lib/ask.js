const async = require('async');
const inquirer = require('inquirer');
const evaluate = require('./eval');

const promptMapping = {
  string: 'input',
  boolean: 'confirm'
}

module.exports = function ask (prompts, data, done) {
  async.eachSeries(Object.keys(prompts), (key, next) => {
    prompt(data, key, prompts[key], next);
  }, done);
}

function prompt (data, key, prompt, done) {
  if (prompt.when && !evaluate(prompt.when, data)) {
    return done();
  }

  var promptDefault = prompt.default
  if (typeof prompt.default === 'function') {
    promptDefault = function () {
      return prompt.default.bind(this)(data);
    }
  }

  inquirer.prompt([{
    type: promptMapping[prompt.type] || prompt.type,
    name: key,
    message: prompt.message || prompt.label || key,
    default: promptDefault,
    choices: prompt.choices || [],
    validate: prompt.validate || (() => true)
  }]).then(answers => {
    if (Array.isArray(answers[key])) {
      data[key] = {};
      answers[key].forEach(multiChoiceAnswer => {
        data[key][multiChoiceAnswer] = true;
      })
    } else if (typeof answers[key] === 'string') {
      data[key] = answers[key].replace(/"/g, '\\"');
    } else {
      data[key] = answers[key];
    }
    done();
  }).catch(done);
}
