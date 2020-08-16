// Have the function CountingMinutes(str) take the str parameter being passed which will be two times
//  (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number
//   of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am
//    then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.

function CountingMinutes(str) {
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

  str = str.split('-');
  const time1 = toMins(str[0]);
  let time2 = toMins(str[1]);

  let res = time2 <= time1 ? 1440 + (time2 - time1) : time2 - time1;

  return res;
}
