import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");

reader.read();

// Outcome For magic string comparison - solving #1 issues - ts ENUMERATION - enum - for signaling other engineers
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0;

for (let data of reader.data) {
  if (data[1] === "Man United" && data[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (data[2] === "Man United" && data[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(
  `Manchester United memenangkan pertandingan sebanyak ${manUnitedWins}x pertandingan`
);
