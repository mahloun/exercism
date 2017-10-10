import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class PangramChecker {
    static private Integer _alphabetLength;

  public PangramChecker() {
    _alphabetLength = 26;
  }

  private Set<String> getDistinctLetters(String input) {
    return Stream.of(input.toLowerCase().split(""))
        .filter((letter) -> letter.matches("[a-z]"))
        .collect(Collectors.toSet());
  }

  public boolean isPangram(String input) {
    return getDistinctLetters(input).size() == _alphabetLength;
  }
}