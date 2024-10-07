// Julian Date is essential in Astronomy.
const getJulianDate = (date = new Date()) => {
  const time = date.getTime();
  const tzoffset = date.getTimezoneOffset();

  return time / 86400000 - tzoffset / 1440 + 2440587.5;
};

function meanAnomaly(julian_date, planet) {
  const planetaryData = {
    Mercury: { m0: 174.7948, m1: 4.09233445 },
    Venus: { m0: 50.4161, m1: 1.60213034 },
    Earth: { m0: 357.5291, m1: 0.98560028 },
    Mars: { m0: 19.373, m1: 0.52402068 },
    Jupiter: { m0: 20.0202, m1: 0.08308529 },
    Saturn: { m0: 317.0207, m1: 0.03344414 },
    Uranus: { m0: 141.0498, m1: 0.01172834 },
    Neptune: { m0: 256.225, m1: 0.00598103 },
    Pluto: { m0: 14.882, m1: 0.00396 },
  };

  // Check if the planet exists in the data
  if (!planetaryData[planet]) {
    throw new Error("Invalid planet name");
  }

  const { m0, m1 } = planetaryData[planet];
  const M = (m0 + m1 * (julian_date - 2451545)) % 360;

  // Normalize M to be within the range [0, 360)
  return M < 0 ? M + 360 : M;
}

function equationOfCenter(M, planet) {
  const planetaryCoefficients = {
    Mercury: {
      c1: 23.44,
      c2: 2.9818,
      c3: 0.5255,
      c4: 0.1058,
      c5: 0.0241,
      c6: 0.0055,
    },
    Venus: { c1: 0.7758, c2: 0.0033, c3: 0, c4: 0, c5: 0, c6: 0 },
    Earth: { c1: 1.9148, c2: 0.02, c3: 0.0003, c4: 0, c5: 0, c6: 0 },
    Mars: {
      c1: 10.6912,
      c2: 0.6228,
      c3: 0.0503,
      c4: 0.0046,
      c5: 0.0005,
      c6: 0.0001,
    },
    Jupiter: {
      c1: 5.5549,
      c2: 0.1683,
      c3: 0.0071,
      c4: 0.0003,
      c5: 0,
      c6: 0.0001,
    },
    Saturn: {
      c1: 6.3585,
      c2: 0.2204,
      c3: 0.0106,
      c4: 0.0006,
      c5: 0,
      c6: 0.0001,
    },
    Uranus: {
      c1: 5.3042,
      c2: 0.1534,
      c3: 0.0062,
      c4: 0.0003,
      c5: 0,
      c6: 0.0001,
    },
    Neptune: { c1: 1.0302, c2: 0.0058, c3: 0, c4: 0, c5: 0, c6: 0.0001 },
    Pluto: {
      c1: 28.315,
      c2: 4.3408,
      c3: 0.9214,
      c4: 0.2235,
      c5: 0.0627,
      c6: 0.0174,
    },
  };
  // Check if the planet exists in the data
  if (!planetaryCoefficients[planet]) {
    throw new Error("Invalid planet name");
  }

  const { c1, c2, c3, c4, c5, c6 } = planetaryCoefficients[planet];

  // Convert M to radians for the trigonometric functions
  const M_rad = M * (Math.PI / 180); // Convert degrees to radians

  // Calculate C using the equation of center formula
  const C =
    c1 * Math.sin(M_rad) +
    c2 * Math.sin(2 * M_rad) +
    c3 * Math.sin(3 * M_rad) +
    c4 * Math.sin(4 * M_rad) +
    c5 * Math.sin(5 * M_rad) +
    c6 * Math.sin(6 * M_rad);

  return C;
}

function trueAnomaly(M, C) {
  const v = M + C;
  return v % 360;
}

const planetaryData = {
  Mercury: {
    a: 0.3871,
    e: 0.20563,
    i: 7.005,
    om: 29.125,
    omega: 48.331,
    M0: 174.795,
  },
  Venus: {
    a: 0.72333,
    e: 0.00677,
    i: 3.395,
    om: 54.884,
    omega: 76.68,
    M0: 50.416,
  },
  Earth: {
    a: 1.0,
    e: 0.01671,
    i: 0.0,
    om: 288.064,
    omega: 174.873,
    M0: 357.529,
  },
  Mars: {
    a: 1.52368,
    e: 0.0934,
    i: 1.85,
    om: 286.502,
    omega: 49.558,
    M0: 19.373,
  },
  Jupiter: {
    a: 5.2026,
    e: 0.04849,
    i: 1.303,
    om: 273.867,
    omega: 100.464,
    M0: 20.02,
  },
  Saturn: {
    a: 9.55491,
    e: 0.05551,
    i: 2.489,
    om: 339.391,
    omega: 113.666,
    M0: 317.021,
  },
  Uranus: {
    a: 19.21845,
    e: 0.0463,
    i: 0.773,
    om: 98.999,
    omega: 74.006,
    M0: 141.05,
  },
  Neptune: {
    a: 30.11039,
    e: 0.00899,
    i: 1.77,
    om: 276.34,
    omega: 131.784,
    M0: 256.225,
  },
  Pluto: {
    a: 39.543,
    e: 0.249,
    i: 17.14,
    om: 113.768,
    omega: 110.307,
    M0: 14.882,
  },
};

function distanceToSun(v, planet) {
  const Data = {
    Mercury: { n: 4.092317, deno: 0.37073, ii: 77.456 },
    Venus: { n: 1.602136, deno: 0.7233, ii: 131.564 },
    Earth: { n: 0.985608, deno: 0.99972, ii: 102.937 },
    Mars: { n: 0.524039, deno: 1.51039, ii: 336.06 },
    Jupiter: { n: 0.083056, deno: 5.19037, ii: 14.331 },
    Saturn: { n: 0.033371, deno: 9.52547, ii: 93.057 },
    Uranus: { n: 0.011698, deno: 19.17725, ii: 173.005 },
    Neptune: { n: 0.005965, deno: 30.10796, ii: 48.124 },
    Pluto: { n: 0.003964, deno: 37.09129, ii: 224.075 },
  };
  if (!Data[planet]) {
    throw new Error("Invalid planet name");
  }

  const { n, deno, ii } = Data[planet];
  const v_rad = v * (Math.PI / 180); // Convert degrees to radians
  const r = deno / (1 + planetaryData[planet].e * Math.cos(v_rad));
  return r;
}

function helioCoords(v, planet, r) {
  if (!planetaryData[planet]) {
    throw new Error("Invalid planet name");
  }
  const { a, e, i, om, omega, M0 } = planetaryData[planet];
  const om_rad = om * (Math.PI / 180); // w
  const omega_rad = omega * (Math.PI / 180); // omega
  const v_rad = v * (Math.PI / 180);
  const i_rad = i * (Math.PI / 180);

  const x =
    r *
    (Math.cos(omega_rad) * Math.cos(om_rad + v_rad) -
      Math.sin(omega_rad) * Math.cos(i_rad) * Math.sin(om_rad + v_rad));
  const y =
    r *
    (Math.sin(omega_rad) * Math.cos(om_rad + v_rad) +
      Math.cos(omega_rad) * Math.cos(i_rad) * Math.sin(om_rad + v_rad));
  const z = r * Math.sin(i_rad) * Math.sin(om_rad + v_rad);

  return [x, y, z];
}

