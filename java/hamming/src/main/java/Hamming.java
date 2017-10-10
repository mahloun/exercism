import java.util.Arrays;
import java.util.List;

public class Hamming {
  private final List<String> _leftStrand;
  private final List<String> _rightStrand;
  private final int _strandSize;

  Hamming(String leftStrand, String rightStrand) throws IllegalArgumentException {
    _leftStrand = Arrays.asList(leftStrand.split( ""));
    _rightStrand = Arrays.asList(rightStrand.split(""));
    _strandSize = _leftStrand.size();

    if (_strandSize != _rightStrand.size()) {
      throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
    }
  }

  private final boolean areNucleotidesEqualsAt(final int strandIndex) {
    return _leftStrand.get(strandIndex).equals(_rightStrand.get(strandIndex));
  }

  private int computeHammingDistance(final int currentDistance, final int strandIndex) {
    return (
        strandIndex < _strandSize
          ? computeHammingDistance(
            areNucleotidesEqualsAt(strandIndex) ? currentDistance : currentDistance + 1,
            strandIndex + 1
          )
          : currentDistance
    );
  }

  public int getHammingDistance() {
    return computeHammingDistance(0, 0);
  }
}