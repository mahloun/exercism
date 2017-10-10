"use strict"

class DnaTranscriber {
  constructor() {
    this.transcriptionTable = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    }
  }

  isDnaStrandInvalid(dnaStrand) {
    return dnaStrand.match(/[^GCTA]/) !== null;
  }

  toRna(dnaStrand) {
    if (this.isDnaStrandInvalid(dnaStrand))
      throw Error('Invalid input');

    return dnaStrand
      .split('')
      .reduce(
        (rnaStrand, dnaNucleotide) => rnaStrand.concat(this.transcriptionTable[dnaNucleotide]),
        ''
      );
  }
}

module.exports = DnaTranscriber;
