const logColors = {
  _RED: '\u001b[31m',
  _GREEN: '\u001b[32m',
  _YELLOW: '\u001b[33m',
  _BLUE: '\u001b[34m',
  _MAGENETA: '\u001b[35m',
  _CYAN: '\u001b[36m',
  _WHITE: '\u001b[37m',
};

const logUtils = {
  _RESET: '\u001b[0m',
  _BOLD: '\u001b[1m',
  _UNDERLINE: '\u001b[4m',
};

const getLogObject = (logObject) => {
  return new Map(Object.entries(logObject));
};

const logEntryExists = (logEntry, logObject) => {
  const logEntries = Object.keys(logObject);
  return logEntries.indexOf(logEntry.split(' ')[0]) !== -1;
};

const matchColors = (userColor) => {
  const colors = getLogObject(logColors);
  if (logEntryExists(userColor, logColors)) {
    return colors.get(userColor);
  }
};

export const customLog = (userColor, text) => {
  const matchedColor = matchColors(userColor);
  console.log(matchedColor + text + logUtils._RESET);
  /*  if (matchColors(userColor) {
    console.log(colors.entries() + text);
  }*/
};
