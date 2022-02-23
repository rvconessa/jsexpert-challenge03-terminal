import IncomeRepository from './../repository/IncomeRepository.js';
import Income from './../entity/Income.js';

class IncomeService {
  constructor({ incomeRepository } = {}) {
    this.incomeRepository = incomeRepository || new IncomeRepository();
  }

  async generateIncomeFromString(incomeString, delimiter = ';') {
    const [position, expectation] = incomeString.split(delimiter);
    if(position === '') {
      throw new Error('Position is a required field. Please make sure you are providing a position.');
    }

    if(isNaN(expectation)) {
      throw new Error('A valid Expectation is required. Please note that only numbers are allowed.');
    }

    const data = new Income({ position });
    data.expectation.value = +expectation;

    const conversions = await this.incomeRepository.getConversions();
    data.conversion01.value = expectation * conversions[data.conversion01.currency]
    data.conversion02.value = expectation * conversions[data.conversion02.currency]
    data.conversion03.value = expectation * conversions[data.conversion03.currency]

    return data;
  }
}

export default IncomeService;
