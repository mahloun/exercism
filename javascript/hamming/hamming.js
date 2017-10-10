"use strict"

const Hamming = function() {
  this.is_nucleotide_different_at = function(index) {
    return this.strand_x[index] !== this.strand_y[index];
  }

  this.hamming_distance = function({nucleotide_index, distance}) {
    return (
      nucleotide_index < this.strands_length
        ? this.hamming_distance({
            nucleotide_index: nucleotide_index + 1,
            distance: (
              this.is_nucleotide_different_at(nucleotide_index)
                ? distance + 1
                : distance
               )
             })
      : {
        nucleotide_index,
        distance
      }
    );
  }

  this.compute = function(strand_x, strand_y) {
    const strand_x_length = strand_x.length
    if (strand_x_length !== strand_y.length)
      throw Error("DNA strands must be of equal length.");

    this.strand_x = strand_x;
    this.strand_y = strand_y;
    this.strands_length = strand_x.length;

    return this.hamming_distance({
      nucleotide_index: 0,
      distance: 0
    }).distance;
  }
}

module.exports = Hamming;
