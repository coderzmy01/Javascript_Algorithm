/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let newS = changeStr(s);
  let newT = changeStr(t);
  console.log(s, t);
  return newS === newT;
};
function changeStr(str) {
  str = Array.from(str);
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < str.lenght; fastIndex++) {
    if (str[fastIndex] !== "#") {
      str[slowIndex++] = str[fastIndex];
    } else {
      slowIndex = slowIndex < 1 ? 0 : slowIndex--;
    }
  }
  return String(str).slice(0, slowIndex).split(",");
}

backspaceCompare("ab#c",
"ad#c")