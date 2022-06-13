// code your solution here
function superbowlWin(record) {
    const dub = record.find(function(winningYearForDenver) {
        return winningYearForDenver.result === 'W';
   })
   return !!dub ? dub.year : dub;
}