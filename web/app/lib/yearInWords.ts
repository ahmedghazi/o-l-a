export function yearInWords(rawYear: number) {
  const ones = [
    '',
    'un',
    'deux',
    'trois',
    'quatre',
    'cinq',
    'six',
    'sept',
    'huit',
    'neuf',
    'dix',
    'onze',
    'douze',
    'treize',
    'quatorze',
    'quinze',
    'seize',
    'dix-sept',
    'dix-huit',
    'dix-neuf',
  ]

  const tens = [
    '',
    'dix',
    'vingt',
    'trente',
    'quarante',
    'cinquante',
    'soixante',
    'soixante',
    'quatre-vingt',
    'quatre-vingt',
  ]

  function twoDigits(n: number) {
    if (n < 20) return ones[n]
    const t = Math.floor(n / 10)
    const o = n % 10
    if (t === 7 || t === 9) return tens[t] + (o > 0 ? '-' + ones[10 + o] : t === 9 ? '-dix' : '')
    return tens[t] + (o > 0 ? '-' + ones[o] : t === 8 && o === 0 ? 's' : '')
  }

  function yearToFrench(year: number) {
    const thousands = Math.floor(year / 1000)
    const remainder = year % 1000
    const hundreds = Math.floor(remainder / 100)
    const rest = remainder % 100

    let result = ''

    if (thousands > 0) result += thousands === 1 ? 'mille' : ones[thousands] + ' mille'
    if (hundreds > 0) result += ' ' + ones[hundreds] + ' cent'
    if (rest > 0) result += ' ' + twoDigits(rest)

    // Capitalize first letter
    return result.trim().replace(/^\w/, (c) => c.toUpperCase())
  }

  // const year = new Date().getFullYear()
  console.log(yearToFrench(rawYear)) // "Deux mille vingt-six"
  return yearToFrench(rawYear)
}
