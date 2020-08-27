const array = [
  {
    day: 'monday',
    hours: [
      {
        from: '09:30',
        to: '20:00',
      },
    ],
  },
  {
    day: 'tuesday',
    hours: [
      {
        from: '09:30',
        to: '20:00',
      },
    ],
  },
  {
    day: 'wednesday',
    hours: [
      {
        from: '09:30',
        to: '19:00',
      },
    ],
  },
  {
    day: 'thursday',
    hours: [
      {
        from: '09:30',
        to: '20:00',
      },
    ],
  },
  {
    day: 'friday',
    hours: [
      {
        from: '09:30',
        to: '20:00',
      },
    ],
  },
  {
    day: 'saturday',
    hours: [
      {
        from: '09:30',
        to: '20:00',
      },
    ],
  },
  {
    day: 'sunday',
    hours: [],
  },
];
function groupOpeningHours(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let day = arr[i].day.slice(0, 3);
    day = day[0].toUpperCase() + day.slice(1);
    let hours = arr[i].hours[0]
      ? `${arr[i].hours[0].from}-${arr[i].hours[0].to}`
      : 'CLOSED';
    if (res[res.length - 1] && hours === res[res.length - 1][1]) {
      res[res.length - 1][0] = `${res[res.length - 1][0].slice(0, 3)}-${day}`;
    } else {
      res.push([day, hours]);
    }
  }

  res = res.map((el) => (el = `${el[0]}: ${el[1]}`));
  return res;
}
console.log(groupOpeningHours(array));
/*
On store detail pages, the opening hours shall be displayed in groups.
For example, a grouped result could look like e.g.
> Mon-Tue: 09:30-20:00
> Wed: 09:30-19:00
> Thu-Sat: 09:30-20:00
CAUTION! As only consecutive days are relevant for grouping, there is NO NEED to group e.g.
> Mon/Wed 08:00-20:00 (Monday and Wednesday are non-consecutive days)
> Tue 08:00-18:00
Please implement the `groupOpeningHours` function to handle the grouping of consecutive days using the provided JSON object.
*/
