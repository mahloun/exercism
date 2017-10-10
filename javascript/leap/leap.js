//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  this.is_evenly_divisible_by = function(number) {
    return input % number == 0;
  }

  this.is_introduced_every_four_years = function() {
    return this.is_evenly_divisible_by(4);
  }

  this.is_skipped_every_hundred_years = function() {
    return !this.is_evenly_divisible_by(100);
  }

  this.is_reintroduced_every_four_hundred_years = function() {
    return this.is_evenly_divisible_by(400);
  }
};

Year.prototype.isLeap = function() {
  return this.is_introduced_every_four_years()
    && this.is_skipped_every_hundred_years()
    || this.is_reintroduced_every_four_hundred_years();
};

module.exports = Year;
