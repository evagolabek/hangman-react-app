// Hangan Game Logic:

export function wrongGuessCount(word, guesses) {

  return guesses
    .reduce(function(a,b){
      if (a.indexOf(b) < 0 ) a.push(b);
      return a;
    },[])
    .filter(guess => word.indexOf(guess) === -1 )
    .slice(0,6)
    .length;
}

export function showGuess(word, guesses) {
  return word
    .split('')
    .map(letter => guesses.indexOf(letter) < 0 ? "_" : letter)
    .join('')
}

export function isWinner(word, guesses) {
  return word.split('').join('') === showGuess(word, guesses);
}

export function isLoser(word, guesses)  {
  if (wrongGuessCount(word, guesses) >= 6) {
    return true
  }
}

// ---------------------------------------------------------------------
// Random Word Generator:
export function random(words) {
  return words[Math.floor(Math.random() * words.length)]
}

// Word List
export const words = [
  'javascript',
  'sausage',
  'juggling',
  'frustration',
  'satisfaction',
  'announced',
  'proclaimed',
  'charity',
  'fruit',
  'fancy',
  'incredible',
  'swan',
  'beer',
  'programming',
  'childlike',
  'property',
  'state',
  'component',
  'render',
  'lifecycle',
  'probability',
  'party',
  'sacrifice',
  'dedication',
  'maybe',
  'ruby',
  'typescript'
]
