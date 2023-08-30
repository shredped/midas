function getQuestionPart(phrases: string[]): string[] {
  let words: string[] = [];
  let word = '';

  for(let idx = 0; idx < phrases[0].length; idx++) 
  {
    word += phrases[0].slice(idx, idx + 1);
    
    if(!phrases[1].includes(word) && !phrases[2].includes(word))
    {
      words.unshift(word.slice(0, -1));

      word = word.slice(1);
    }
  }

  words.unshift(word);

  for(let word of words)
  {
    if(phrases[0].includes(word) && phrases[1].includes(word) && phrases[2].includes(word) && word.length > 1)
    {
      phrases = phrases.map(v => v.replace(word, '').trim());

      break;
    }
  }

  return phrases;
}
