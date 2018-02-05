import Lexer from '../../src/assembler/lexer';

describe('Lexer', () => {

  let lexer = null;
  beforeEach(() => {
    lexer = new Lexer();
  });

  it('can parse newline terminators', () => {
    lexer.setInput("\n");
    expect(lexer.nextToken().name).toEqual('T_TERMINATOR');
  });

});