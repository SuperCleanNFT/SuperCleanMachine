let medium, mediumDescriptor, mainSubjectNouns, artStyle, mainSubjectVerbs, mathDescriptors, spaceDescriptors, lenses, stylize, chaos;

function preload() {
  medium = loadJSON('medium.json');
  mediumDescriptor = loadJSON('mediumDescriptor.json');
  mainSubjectNouns = loadJSON('mainSubjectNouns.json');
  artStyle = loadJSON('artStyle.json');
  mainSubjectVerbs = loadJSON('mainSubjectVerbs.json');
  mathDescriptors = loadJSON('mathDescriptors.json');
  spaceDescriptors = loadJSON('spaceDescriptors.json');
  stylize = loadJSON('stylize.json');
  chaos = loadJSON('chaos.json');
  lenses = loadJSON('lenses.json');
}

function setup() {
  noCanvas();

  const form = document.getElementById('addressForm');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const walletAddress = document.getElementById('walletAddress').value;
    const convertedString = convertAddress(walletAddress);
    resultDiv.textContent = convertedString;
  });
}

function convertAddress(walletAddress) {
  walletAddress = walletAddress.replace("0x", ""); // remove "0x" from the start of the string
  let numbers = walletAddress.split("").map(function (char) {
    let num = parseInt(char, 16);
    return isNaN(num) ? "NaN" : num;
  });

  let mediumIndex = numbers[0] % medium.numbers.length;
  let mediumDescriptorIndex = numbers[4] % mediumDescriptor.numbers.length;
  let mainSubjectNounsIndex = numbers[8] % mainSubjectNouns.numbers.length;
  let artStyleIndex = numbers[12] % artStyle.numbers.length;
  let mainSubjectVerbsIndex = numbers[16] % mainSubjectVerbs.numbers.length;
  let mathDescriptorsIndex = numbers[20] % mathDescriptors.numbers.length;
  let spaceDescriptorsIndex = numbers[24] % spaceDescriptors.numbers.length;
  let lensesIndex = numbers[28] % lenses.numbers.length;
  let stylizeIndex = numbers[32] % stylize.numbers.length;
  let chaosIndex = numbers[36] % chaos.numbers.length;

  let result = `${medium.numbers[mediumIndex]} ${mediumDescriptor.numbers[mediumDescriptorIndex]} ${mainSubjectNouns.numbers[mainSubjectNounsIndex]} ${artStyle.numbers[artStyleIndex]}, ${mainSubjectVerbs.numbers[mainSubjectVerbsIndex]} ${mathDescriptors.numbers[mathDescriptorsIndex]}, ${spaceDescriptors.numbers[spaceDescriptorsIndex]} ${lenses.numbers[lensesIndex]} ${stylize.numbers[stylizeIndex]} ${chaos.numbers[chaosIndex]}`;

  return result;
}
