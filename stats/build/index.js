"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
// Outcome For magic string comparison - solving #1 issues - ts ENUMERATION - enum - for signaling other engineers
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manUnitedWins = 0;
for (let data of reader.data) {
    if (data[1] === "Man United" && data[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (data[2] === "Man United" && data[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Manchester United memenangkan pertandingan sebanyak ${manUnitedWins}x pertandingan`);
