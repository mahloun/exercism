import java.time.LocalDate;
import java.time.LocalDateTime;

class Gigasecond {
  private static long _gigaSecond = (long) Math.pow(10, 9);
  private LocalDateTime _birthDateTime;

  Gigasecond(LocalDate birthDate) {
    _birthDateTime = birthDate.atStartOfDay();
  }

  Gigasecond(LocalDateTime birthDateTime) {
    _birthDateTime = birthDateTime;
  }

  LocalDateTime getDate() {
    return _birthDateTime.plusSeconds(_gigaSecond);
  }
}