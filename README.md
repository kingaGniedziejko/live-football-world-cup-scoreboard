# Live Football World Cup Score Board

Library showing and updating ongoing matches and their scores.

### Tech stack:

- TypeScript, Jest

### Usage:

```
scoreboard = new Scoreboard(); // create scoreboard

scoreboard.startMatch('Spain', 'Brazil'); // start match

scoreboard.updateScore('Spain', 'Brazil', 1, 0); // update match score

const summary = scoreboard.getSummary(); // get sorted scoreboard summary

scoreboard.toString() // parse scoreboard to string as sorted list

scoreboard.finishMatch('Spain', 'Brazil'); // finish match
```

### Testing:

To run tests locally:

1. `npm install`
2. `npm test`

### Notes:

- summary match sorting - because Array.prototype.sort is stable since version 10 (ECMAScript 2019) it is only nacessary to sort matches after total score as they are inserted into the beginning of an array when they start, hence already sorted from most recently started.
