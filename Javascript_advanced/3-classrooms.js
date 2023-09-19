function createClassRoom(numbersOfStudents) {
    let students = [];
  
    function studentSeat(seat) {
      return function() {
        return seat;
      };
    }
  
    for (let i = 0; i < numbersOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    return students;
  }
  
  let classRoom = createClassRoom(10);
  
  console.log(classRoom0);
  console.log(classRoom3);
  console.log(classRoom9);
  