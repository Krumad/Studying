//LZ task16

let letterToEncrypt = prompt(
  "Enter a letter to encrypt(lower case)"
).charCodeAt();
const encryptsStep = parseInt(prompt("step of encrypting - from 1 to 25"));
const alphabetSize = 26;
const alphabetsNumberStart = 97;
let encryptedLetter =
  ((letterToEncrypt + 1 - alphabetsNumberStart + encryptsStep) % alphabetSize) +
  alphabetsNumberStart -
  1;
letterToEncrypt = String.fromCharCode(letterToEncrypt);
encryptedLetter = String.fromCharCode(encryptedLetter);
alert(
  `Your letter "${letterToEncrypt}" in ${encryptsStep} step(s) encrypts to "${encryptedLetter}"`
);
