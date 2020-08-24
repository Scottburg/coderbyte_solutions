// Have the function TimeDifference(strArr) read the array of strings stored in strArr which will be an unsorted list of times in a
// twelve-hour format like so: HH:MM(am/pm). Your goal is to determine the smallest difference in minutes between two of the times
// in the list. For example: if strArr is ["2:10pm", "1:30pm", "10:30am", "4:42pm"] then your program should return 40 because the
// smallest difference is between 1:30pm and 2:10pm with a difference of 40 minutes. The input array will always contain at least
// two elements and all of the elements will be in the correct format and unique.

function TimeDifference(strArr) {
  function toMins(t1) {
    let t1mins = null;
    t1 = t1.split(':');
    let hours = parseInt(t1[0]);
    hours === 12 ? (hours = 0) : null;
    const mins = parseInt(t1[1].substring(0, 2));
    let amPm = t1[1].substring(2, 4);
    if (amPm === 'pm') {
      hours += 12;
    }
    t1mins += hours * 60;
    t1mins += mins;
    return t1mins;
  }

  let res = Infinity;
  let minsArr = strArr.map((el) => toMins(el));
  minsArr.sort((a, b) => a - b);
  for (let i = 1; i < minsArr.length; i++) {
    if (minsArr[i] - minsArr[i - 1] < res) {
      res = minsArr[i] - minsArr[i - 1];
    }
  }
  let roundTheClock = 1440 - minsArr[minsArr.length - 1] + minsArr[0];
  return res < roundTheClock ? res : roundTheClock;
}

console.log(TimeDifference(['1:10pm', '4:40am', '5:00pm'])); // 230
console.log(TimeDifference(['2:10pm', '1:30pm', '10:30am', '4:42pm'])); // 40
console.log(TimeDifference(['11:12am', '5:10pm', '11:11am', '9:23pm'])); // 1
