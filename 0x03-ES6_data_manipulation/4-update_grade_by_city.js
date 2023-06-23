export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((obj) => obj.location === city)
    .map((person) => {
      const grades = newGrades.filter((obj) => obj.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}
