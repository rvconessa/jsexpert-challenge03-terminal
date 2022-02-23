import DraftLog from 'draftlog';
import chalkTable from 'chalk-table';
import chalk from 'chalk';
import readline from 'readline';
import terminalConfig from './config/terminal.js';

const TABLE_OPTIONS = terminalConfig.table;

class CustomTerminal {
  constructor() {
    this.print = {};
    this.data = [];
  }

  initialize() {
    DraftLog(console).addLineListener(process.stdin)
    this.termial = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.initializeTable();
  }

  initializeTable() {
    const table = chalkTable(TABLE_OPTIONS, this.data);
    this.print = console.draft(table);
  }

  updateData(item) {
    this.data.push(item);
  }

  question(msg = '') {
    return new Promise(resolve => this.termial.question(msg, resolve));
  }

  errorMessage(message) {
    this.print = console.log(chalk.red(message));
  }

  successMessage(message) {
    this.print = console.log(chalk.green(message));
  }

  closeTerminal() {
    this.termial.close();
  }

}

export default CustomTerminal;
