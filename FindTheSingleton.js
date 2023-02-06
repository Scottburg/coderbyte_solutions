//Hack a job solution

function run(student_list) {
  const resObj = {};

  for (let i = 0; i < student_list.length; i++) {
    if (!resObj[student_list[i]]) {
      resObj[student_list[i]] = 1;
    } else {
      delete resObj[student_list[i]];
    }
  }

  return Object.keys(resObj)[0];
}

console.log(run([5, 3, 2, 2, 3, 5, 4, 6, 9, 6, 4, 12, 8, 9, 12]));
