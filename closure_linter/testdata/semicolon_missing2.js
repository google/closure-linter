/**
 * @fileoverview This is for regression testing of scenario where semicolon is
 * missing at EOF with a non-code token following. b/19279873.
 */

lastFunction = function() {
  // +2: MISSING_SEMICOLON_AFTER_FUNCTION
  // +2: FILE_DOES_NOT_PARSE (Due to an error in indentation processing.)
}
// Just another token, but no more code tokens.
