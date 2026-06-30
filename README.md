# 3D Orrery · Real NASA Data

A simple, real-time 3D model of the solar system using actual NASA/JPL
orbital elements. Built with Three.js. No build step, no dependencies to
install.

## How to run

1. Save `orrery.html` somewhere on your computer.
2. Double-click it — it opens in your default browser.

Requires a modern browser (Chrome 89+, Firefox 108+, Safari 16.4+).
If the page is blank, the CDN is being blocked over `file://`. Run a
tiny local server in the same folder:

    python3 -m http.server 8000
    # then open  http://localhost:8000/orrery.html

## Controls

- **Drag** — rotate the view
- **Scroll** — zoom
- **Right-drag** — pan
- **Click any planet** — see its current distance, true anomaly, etc.
- **Time speed slider** — from 0.01 d/s (reverse) to 10 000 d/s
- **Speed buttons** — pause, 1 day/s, 1 week/s, 1 month/s, 1 year/s
- **Date picker** — jump to any date (year 0 … 9999)
- **Now** — back to the present
- **Orbits / Labels / Real scale** — display toggles

## Data source

Orbital elements come from NASA JPL's *Keplerian Elements for Approximate
Positions of the Major Planets* — the same dataset used for mission
planning. Public domain:

  https://ssd.jpl.nasa.gov/planets/approx_pos.html

Each planet has six elements and their rates of change per Julian
century: **a** (semi-major axis, AU), **e** (eccentricity), **I**
(inclination, deg), **L** (mean longitude, deg), **ϖ** (longitude of
perihelion, deg), **Ω** (longitude of ascending node, deg).

For any Julian Date, the code extrapolates these elements with their
rates, solves Kepler's equation `M = E − e·sin(E)` by Newton–Raphson,
and rotates the result into heliocentric J2000 ecliptic coordinates.

## Accuracy

Good to a few arc-minutes for dates within a few centuries of J2000.0 —
more than enough to show exactly where the planets are *right now*.
NASA's own navigation uses more elaborate models (JPL DE440 etc.) with
planetary perturbations and relativistic corrections, but those are
overkill for a visual orrery.

## Performance

- 8 planets + Sun
- 7 000 procedural background stars
- ~2 000 line segments for orbits
- No textures loaded
- Runs at 60 fps on anything from the last decade
- Total file size: ~30 KB

## License

Code: MIT. Orbital data: public domain (NASA/JPL).
