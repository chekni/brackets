  module.exports = function check(str, bracketsConfig) {
      const ruleBrackets = new Map(bracketsConfig),
          stack = [];
      let expression = str.split('');
      let unseenedBrackets = expression.length;
      let currentBracket,
          pair,
          stackLength;

      while (unseenedBrackets) {
          currentBracket = expression.pop();
          pair = ruleBrackets.get(currentBracket);
          stackLength = stack.length;

          if ((!stackLength) || (stack[stackLength - 1] != pair)) {
              stack.push(currentBracket);
          } else stack.pop();

          unseenedBrackets = expression.length;
      }

      return !stack.length;
  }