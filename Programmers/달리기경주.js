function solution(players, callings) {
  const map = new Map();

  players.forEach((name, index) => {
    map.set(name, index);
  });

  callings.forEach((name) => {
    const curIdx = map.get(name);
    const prevName = players[curIdx - 1];

    [players[curIdx - 1], players[curIdx]] = [
      players[curIdx],
      players[curIdx - 1],
    ];

    map.set(name, map.get(name) - 1);
    map.set(prevName, map.get(name) + 1);
  });

  return players;
}
