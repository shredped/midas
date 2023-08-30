function quickestPath(board: { ladders: [number, number][]; snakes: [number, number][]; }): number[] {
  let pos = 1;
  let rolls: number[] = []; 

  while(pos < 100)
  {
    let expectedDice = 6;

    if(pos + expectedDice > 100) expectedDice = 100 - pos;

    let ladder = board.ladders.find(([s, _]) => s > pos && s <= pos + expectedDice);
    
    if(ladder && ladder[0] <= pos + expectedDice)
    {
      const dice = ladder[0] - pos;

      pos = ladder[1];

      rolls.push(dice);

      continue;
    } 

    const snake = board.snakes.find(([_, s]) => s <= pos);

    if(!snake)
    {
        pos += expectedDice;

        rolls.push(expectedDice);

        continue;
    } 

    if(snake[1] == pos + expectedDice)
    {
        pos += expectedDice - 1;

        rolls.push(expectedDice - 1);

        continue;
    }

    pos += expectedDice;

    rolls.push(expectedDice); 
  }

  return rolls;
}

