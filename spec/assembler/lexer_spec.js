import Lexer from '../../src/assembler/lexer';

const extractTokens = (lexer) => {
  const results = [];
  let token = lexer.nextToken();
  while (Object.keys(token).length > 0) {
    results.push(token.name);
    token = lexer.nextToken();
  }
  return results;
};

describe('Lexer', () => {

  let lexer = null;
  beforeEach(() => {
    lexer = new Lexer();
  });

  it('can parse newline terminators', () => {
    lexer.setInput("\n");
    expect(extractTokens(lexer)).toEqual(
      ['T_TERMINATOR']
    );
  });

});