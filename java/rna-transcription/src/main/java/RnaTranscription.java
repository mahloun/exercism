import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class RnaTranscription {
  private final Map<String, String> _transcriptionTable;


  public RnaTranscription() {
    _transcriptionTable = new Hashtable<String, String>();

    _transcriptionTable.put("C", "G");
    _transcriptionTable.put("G", "C");
    _transcriptionTable.put("T", "A");
    _transcriptionTable.put("A", "U");
  }

  private boolean onlyContainsValidNucleotides(final String dnaStrand) {
    final Set<String> allowedNucleotides = _transcriptionTable.keySet();

    return !Arrays
        .stream(dnaStrand.split(""))
        .map(nucleotide -> allowedNucleotides.contains(nucleotide))
        .collect(Collectors.toSet())
        .contains(false);
  }

  public String transcribe(final String dnaStrand) throws IllegalArgumentException {
    if (!onlyContainsValidNucleotides(dnaStrand)) {
      throw new IllegalArgumentException("Invalid input");
    }

    return Arrays
        .stream(dnaStrand.split(""))
        .map(nucleotide -> _transcriptionTable.get(nucleotide))
        .collect(Collectors.joining());
  }
}