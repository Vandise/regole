import Driver from '../../src/assembler/driver';

describe('Driver', () => {

  describe('on initialzation', () => {

    const input = 'This is some input';

    it('sets the user input', () => {
      const driver = new Driver(input);
      expect(driver._text).toEqual(input);
    });

    it('initializes the assembler lexer', () => {
      const driver = new Driver(input);
      expect(driver._lexer.constructor.name).toEqual('Lexer');
    });

    it('initializes the assembler parser', () => {
      const driver = new Driver(input);
      expect(driver._parser.constructor.name).toEqual('Parser');
    });
  });

});