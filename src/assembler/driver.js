import Lexer from './lexer';
import Parser from './parser';

/** drives the compilation and execution of the user input */
export default class AssemblerDriver {

  /**
   * @constructor
   * @param {string} text - The code written by the user
   */
  constructor(text) {
    this._text = text;
    this._lexer = new Lexer();
    this._parser = new Parser({});
  }

}
