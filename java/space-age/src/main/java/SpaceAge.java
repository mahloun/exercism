class SpaceAge {
    private double _age;

    SpaceAge(double seconds) {
        _age = seconds;
    }

    double getSeconds() {
        return _age;
    }

    double onEarth() {
        return ageOn(Planet.EARTH);
    }

    double onMercury() {
        return ageOn(Planet.MERCURY);
    }

    double onVenus() {
        return ageOn(Planet.VENUS);
    }

    double onMars() {
        return ageOn(Planet.MARS);
    }

    double onJupiter() {
        return ageOn(Planet.JUPITER);
    }

    double onSaturn() {
        return ageOn(Planet.SATURN);
    }

    double onUranus() {
        return ageOn(Planet.URANUS);
    }

    double onNeptune() {
        return ageOn(Planet.NEPTUNE);
    }

    private double ageOn(final Planet planet) {
        return _age / planet.orbitalPeriod();
    }
}
