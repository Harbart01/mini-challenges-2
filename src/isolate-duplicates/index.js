function isolateDuplicates(text) {
  let newAlphaArr = "";
  let alphabet = text[0];
  //let presentAlpha = text[i];
  let count = 0;
  let countAlpha = 1;

  if (typeof(text) != "string") {
    return ("Please enter a valid string");
  }

  for (var i = 1; i < text.length; i++) {
    if (text[i] === alphabet) {
      countAlpha++;
    } else {
      if (countAlpha > 2) {
      newAlphaArr += alphabet + alphabet + "[" + alphabet.repeat(countAlpha - 2) + "]";
      count++;
    } else {
      newAlphaArr += alphabet.repeat(countAlpha);
    }
    alphabet = text[i];
    countAlpha = 1;
    }
  }
  if (countAlpha > 2) {
    newAlphaArr += alphabet + alphabet + "[" + alphabet.repeat(countAlpha - 2) + "]";
    count++;
  } else {
    newAlphaArr += alphabet.repeat(countAlpha);
  }
  return [newAlphaArr, count];
}

module.exports = isolateDuplicates;


// let firstEncounter = text[i]
//if index of charAt[i] > 2, then return result +
