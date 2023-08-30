function getClockAngle(hh_mm: string): number {
  let [h24, m24] = hh_mm.split(':');
  let h12 = parseInt(h24) % 12;
  let m12 = parseInt(m24) / 5;

  if(h12 > 6) h12 -= 12;

  let result = Math.abs(h12 - m12) * 15;

  if(result >= 45) return result * 2;

  return result;
}
