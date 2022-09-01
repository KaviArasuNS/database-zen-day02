// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors

// Add Data Sample

db.students_zen.insertMany([
  {
    id: "1",
    user: "Ashok",
    codekata_solved: 120,
    placement_appeared: false,
  },
  {
    id: "2",
    user: "Anand",
    codekata_solved: 70,
    placement_appeared: true,
  },
  {
    id: "3",
    user: "Arun",
    codekata_solved: 80,
    placement_appeared: true,
  },
  {
    id: "4",
    user: "Kumar",
    codekata_solved: 90,
    placement_appeared: true,
  },
  {
    id: "5",
    user: "Babu",
    codekata_solved: 130,
    placement_appeared: false,
  },
  {
    id: "6",
    user: "Suresh",
    codekata_solved: 150,
    placement_appeared: false,
  },
]);

db.topics_zen.insertMany([
  {
    topic: "JS Arrays and Objects",
    task: "Perform MRF Operation on an array of values",
    month_taught: "October",
    task_link: "www.zenclass.in",
  },
  {
    topic: "Functions",
    task: "Create a function to print Fibonacci Series",
    month: "October",
    task_link: "www.zenclass.in",
  },
  {
    topic: "ES5 vs ES6",
    task: "Document the major differences of ES5 to ES6",
    month: "October",
    task_link: "www.zenclass.in",
  },
  {
    topic: "Flexbox",
    task: "Replicate this website using Flexbox Property",
    month: "November",
    task_link: "www.zenclass.in",
  },
  {
    topic: "Callback",
    task: "Set a timer function using Callback Hell",
    month: "November",
    task_link: "www.zenclass.in",
  },
]);

db.mentors_zen.insertMany([
  {
    name: "Aakesh",
    mentees: [
      "Advaith",
      "Dalbir",
      "Darpan",
      "Ekansh",
      "Gopal",
      "Harsh",
      "Harshil",
    ],
    mentees_count: 7,
  },
  {
    name: "Arjun",
    mentees: [
      "Advaith",
      "Dalbir",
      "Darpan",
      "Ekansh",
      "Gopal",
      "Harsh",
      "Harshil",
    ],
    mentees_count: 7,
  },
  {
    name: "Karthik",
    mentees: [
      "Advaith",
      "Dalbir",
      "Darpan",
      "Ekansh",
      "Gopal",
      "Harsh",
      "Harshil",
    ],
    mentees_count: 7,
  },
  {
    name: "Nitin",
    mentees: [
      "Advaith",
      "Dalbir",
      "Darpan",
      "Ekansh",
      "Gopal",
      "Harsh",
      "Harshil",
      "Isaac",
    ],
    mentees_count: 8,
  },
  {
    name: "Mohan",
    mentees: [
      "Advaith",
      "Dalbir",
      "Darpan",
      "Ekansh",
      "Gopal",
      "Harsh",
      "Harshil",
      "Imaran",
      "Krishna",
      "Mohammed",
      "Naveen",
      "Pranav",
      "Pratyush",
      "Ranveer",
      "Vedant",
      "Ragav",
    ],
    mentees_count: 16,
  },
]);

db.task_submission.insertMany([
  {
    id: "1",
    user: "Ashok",
    task_submited: 20,
    total_tasks: 30,
    task_sub_date: 5,
    task_sub_month: "October",
    task_sub_year: 2020,
  },
  {
    id: "2",
    user: "Anand",
    task_submited: 22,
    total_tasks: 30,
    task_sub_date: 5,
    task_sub_month: "November",
    task_sub_year: 2020,
  },
  {
    id: "3",
    user: "Arun",
    task_submited: 24,
    total_tasks: 30,
    task_sub_date: 17,
    task_sub_month: "October",
    task_sub_year: 2020,
  },
  {
    id: "4",
    user: "Kumar",
    task_submited: 26,
    total_tasks: 30,
    task_sub_date: 20,
    task_sub_month: "October",
    task_sub_year: 2020,
  },
  {
    id: "5",
    user: "Babu",
    task_submited: 25,
    total_tasks: 30,
    task_sub_date: 10,
    task_sub_month: "November",
    task_sub_year: 2020,
  },
  {
    id: "6",
    user: "Suresh",
    task_submited: 24,
    total_tasks: 30,
    task_sub_date: 30,
    task_sub_month: "October",
    task_sub_year: 2020,
  },
]);

// Find all the topics and tasks which are thought in the month of October
db.topics_zen.find({ month: "October" }).pretty();

//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

// Find all the company drives and students who are appeared for the placement.
db.students_zen.find({ placement_appeared: true }).pretty();

// Find the number of problems solved by the user in codekata
db.students_zen.find({}, { _id: 0, user: 1, codekata_solved: 1 }).pretty();

// Find all the mentors with who has the mentee's count more than 15
db.mentors_zen.aggregate({
  $project: { _id: 0, name: 1, mentees_count: { $size: "$mentees" } },
});

db.mentors_zen.find({ $where: "(this.mentees.length > 15)" }).pretty();

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.task_submission
  .find({ task_sub_date: { $gte: 15, $lte: 31 }, task_sub_month: "October" })
  .pretty();
