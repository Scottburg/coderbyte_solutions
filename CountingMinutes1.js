// Have the function CountingMinutesI(str) take the str parameter being passed which will be two times
//  (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number
//   of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am
//    then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.

function CountingMinutesI(str) {
  // splits into two seperate times and adds a leading 0 to give a uniform size
  let t1 = str.split('-')[0];
  let t2 = str.split('-')[1];
  if (t1.length === 6) {
    t1 = '0' + t1;
  }
  if (t2.length === 6) {
    t2 = '0' + t2;
  }
  // convert time to numbers taking care to adjust if its PM or AM
  let t1Num = t1.slice(0, 2) * 60 + Number(t1.slice(3, 5));
  if (t1.slice(5, 7) === 'pm' && t1.slice(0, 2) !== '12') {
    t1Num += 720;
  }
  if (t1.slice(5, 7) === 'am' && t1.slice(0, 2) === '12') {
    t1Num -= 720;
  }

  let t2Num = t2.slice(0, 2) * 60 + Number(t2.slice(3, 5));
  if (t2.slice(5, 7) === 'pm' && t2.slice(0, 2) !== '12') {
    t2Num += 720;
  }
  if (t2.slice(5, 7) === 'am' && t2.slice(0, 2) === '12') {
    t2Num -= 720;
  }

  if (t2Num < t1Num) {
    return 1440 - t1Num + t2Num;
  } else {
    return t2Num - t1Num;
  }
}
