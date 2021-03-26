const N = 4
const board = Array.from(Array(N), () => new Array(N))

let boardWithFieldsIndexes = [ ...board ]

let index = 0

for (let row = 0; row < N; row++) {
	for (let col = 0; col < N; col++) {
		if (index < Math.pow(N, N)) {
			boardWithFieldsIndexes[row][col] = index++
		}
	}
}

let verticalWinnerLines = Array.from(Array(N), () => new Array(N))

for (let row = 0; row < N; row++) {
	for (let col = 0; col < N; col++) {
		verticalWinnerLines[row][col] = boardWithFieldsIndexes[col][row]
	}
}

let diagonal1Winnerlines = Array(N)

for (let row = 0; row < N; row++) {
	diagonal1Winnerlines[row] = boardWithFieldsIndexes[row][row]
}

let diagonal2Winnerlines = Array(N)

let acc = N - 1
for (let row = 0; row < N; row++) {
	diagonal2Winnerlines[row] = boardWithFieldsIndexes[row][acc]
	acc--
}

const WINNER_LINES = [ ...boardWithFieldsIndexes, ...verticalWinnerLines, diagonal1Winnerlines, diagonal2Winnerlines ]

console.log(WINNER_LINES)
