public enum Planet {
  MERCURY(0.2408467),
  VENUS(0.615541),
  EARTH(1),
  MARS(1.8808158),
  JUPITER(11.862615),
  SATURN(29.447498),
  URANUS(84.016846),
  NEPTUNE(164.79132);

  final private double _earthOrbitalPeriod = 31557600;
  final private double _earthYears;

  Planet(double earthYears) {
    _earthYears = earthYears;
  }

  public double orbitalPeriod() {
    return _earthYears * _earthOrbitalPeriod;
  }
}
