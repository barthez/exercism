function compute(strand1, strand2) {
  function trim_when_smaller(array, length) {
    return array.splice(0, length);
  }
  function count_differences(count, nucleotide, index) {
    if (nucleotide === strand2_a[index]) {
      return count;
    }
    return count + 1;
  }

  var strand1_a = strand1.split('');
  var strand2_a = strand2.split('');

  return trim_when_smaller(strand1_a, strand2_a.length).reduce(count_differences, 0);
}

if (module) {
  module.exports = {
    compute: compute
  };
}
