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

  it('skips whitespace', () => {
    lexer.setInput(" ");
    expect(extractTokens(lexer)).toEqual(
      []
    );
  });

  it('transitions to MAIN state', () => {
    lexer.setInput(".main");
    extractTokens(lexer);
    expect(lexer.getState()).toEqual('MAIN');
  });

  it('can parse identifiers', () => {
    lexer.setInput(`
      .main
        a
    `);
    expect(extractTokens(lexer)).toEqual(
      ['T_IDENTIFIER']
    );
  });

  it('can parse the mov instruction', () => {
    lexer.setInput(`
      .main
        mov a b
    `);
    expect(extractTokens(lexer)).toEqual(
      ['T_MOV', 'T_IDENTIFIER', 'T_IDENTIFIER']
    );
  });

});