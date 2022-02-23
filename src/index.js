import CustomTerminal from './terminal.js';
import IncomeService from './service/IncomeService.js';

const VOCABULARY = {
  STOP: ':q',
};

const terminal = new CustomTerminal();
terminal.initialize();

const service = new IncomeService();

async function mainLoop() {
  console.info('🚀 Running...\n');
  try {
    terminal.initializeTable();

    const answer = await terminal.readLine(
      'Qual seu cargo e pretensão salarial em BRL? (position; expectation)\n Insira: '
    );

    if(answer === VOCABULARY.STOP) {
      terminal.closeTerminal();
      console.info('finishing terminal instance!');
      return;
    }

    const response = await service.generateIncomeFromString(answer);
    terminal.updateData(response.format());
    terminal.successMessage('Register successfully inserted');
    
    return mainLoop();
    
  } catch (error) {
    terminal.errorMessage(error.message);
    return mainLoop();
  }
}

await mainLoop();
