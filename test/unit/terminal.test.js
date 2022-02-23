import { describe, it, before } from 'mocha';
import { expect } from 'chai';
import CustomTerminal from '../../src/terminal.js';

describe('Terminal', () => {
    let terminal = '';
    beforeEach(() => {
        terminal = new CustomTerminal();
    })

    it('should be populate array data', () => {
        const mock = {
            position: 'Senior Javascript Engineer',
        };

        terminal.updateData({
            position: 'Senior Javascript Engineer',
        });

        expect(terminal.data).to.deep.include(mock);
    });
})