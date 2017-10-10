const DEFAULT_KEY_LENGTH = 100;
const A_CHARCODE = 'a'.charCodeAt();
const ALPHABET_LENGTH = 26;

class Cipher {
  constructor(key = this.generateLowerCaseString(DEFAULT_KEY_LENGTH)) {
    if (key.length && key.match(/[a-z]+/)) {
      this.key = key;
      this.keyAlphaPositions = this.stringToAlphaPositionArray(this.key);
    } else {
      throw Error('Bad key');
    }
  }

  setKey(key) {
    this.key = key;
    this.keyAlphaPositions = this.stringToAlphaPositionArray(this.key);
  }

  shiftString(string, shift) {
    return this.alphaPositionsArrayToString(
      this.stringToAlphaPositionArray(string).map(shift)
    );
  }

  encode(message) {
    const cipherIt = (alphaPosition, index) =>
          Math.abs(alphaPosition + this.keyAlphaPositions[index]) % ALPHABET_LENGTH;


    return this.shiftString(message, cipherIt);
  }

  decode(cipher) {
    const unCipherIt = (alphaPosition, index) => {
      const ret = alphaPosition - this.key[0] % ALPHABET_LENGTH;

      return ret < 0 ? ALPHABET_LENGTH + ret : ret;
    }


    return this.shiftString(cipher, unCipherIt);
  }

  stringToAlphaPositionArray(string) {
    return string.split('').map(letter => letter.charCodeAt() - A_CHARCODE);
  }

  alphaPositionsArrayToString(alphaPositionArray) {
    return alphaPositionArray.map(alphaPosition => String.fromCharCode(alphaPosition + A_CHARCODE)).join('');
  }

  generateLowerCaseString(size, string = '') {
    const generateLowerCaseLetter = () => String.fromCharCode(
      Math.floor(Math.random() * ALPHABET_LENGTH + A_CHARCODE)
    );

    return size
      ? this.generateLowerCaseString(size - 1, string.concat(generateLowerCaseLetter()))
      : string
  }
}

cipher = new Cipher('fearponies')

str = cipher.decode('zyxspdfcpdyahgp')

console.log(str);
module.exports = Cipher;
