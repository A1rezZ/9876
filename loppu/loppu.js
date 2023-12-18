const fs = require('fs');
const readline = require('readline');

const filePath = 'loppu/kss.csv';
const data = [];

const readInterface = readline.createInterface({
  input: fs.createReadStream(filePath),
});

readInterface.on('line', function (line) {
  const [course, student, grade] = line.split('","').map(item => item.replace(/"/g, ''));
  data.push({ course, student, grade });
});

readInterface.on('close', function () {
  function getCourseInfo(courseName) {
    const courseData = data.filter(item => item.course === courseName);
    if (courseData.length > 0) {
      console.log(`Kurssi: ${courseName}`);
      courseData.forEach(item => {
        console.log(`Opiskelija: ${item.student}, Arvosana: ${item.grade}`);
      });
    } else {
      console.log(`Kurssia '${courseName}' ei löytynyt.`);
    }
  }
  function getStudentInfo(studentName) {
    const studentData = data.filter(item => item.student === studentName);
    if (studentData.length > 0) {
      console.log(`Opiskelija: ${studentName}`);
      studentData.forEach(item => {
        console.log(`Kurssi: ${item.course}, Arvosana: ${item.grade}`);
      });
    } else {
      console.log(`Opiskelijaa '${studentName}' ei löytynyt.`);
    }
  }
  function getGrade(studentName, courseName) {
    const gradeData = data.find(item => item.student === studentName && item.course === courseName);
    if (gradeData) {
      console.log(`Opiskelija: ${studentName}, Kurssi: ${courseName}, Arvosana: ${gradeData.grade}`);
    } else {
      console.log(`Opiskelijan '${studentName}' arvosanaa kurssilta '${courseName}' ei löytynyt.`);
    }
  }

  getCourseInfo('Python-ohjelmointi');
  console.log('------------------------');
  getCourseInfo('HTML/CSS');
  console.log('------------------------');
  getStudentInfo('Olli Opiskelija');
  console.log('------------------------');
  getStudentInfo('Maija Meikäläinen');
  console.log('------------------------');
  getGrade('Kalle Koodari', 'HTML/CSS');
});
