/**
 * 1678. Goal Parser Interpretation
 * 문자열
 */
var interpret = function (command) {
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
};

//return command.replaceAll('()','o').replaceAll('(al)','al')
//return command.split("()").join("o").split("(").join("").split(")").join("")
