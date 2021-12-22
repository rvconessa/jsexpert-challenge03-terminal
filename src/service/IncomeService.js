import IncomeRepository from './../repository/IncomeRepository.js';
import Income from './../entity/Income.js';

class IncomeService {
  constructor({ incomeRepository } = {}) {
    this.incomeRepository = incomeRepository || new IncomeRepository();
  }

  async generateIncomeFromString(incomeString, delimiter = ';') {
    const [position, expectation] = incomeString.split(delimiter);

    // @TODO: Implement method
    return null;
  }
}

export default IncomeService;
