function removeDuplicates(obj) {
  let result = {};
  let firstKeyValue = obj[0][i];
  for (let i = 0; i < obj[i]; i++) {
    if (obj[1][i] === firstKeyValue) {
      obj[1].splice(i);
      i++;
      result = obj[i][i];
    }

  }
  return result;
}

module.exports = removeDuplicates;
