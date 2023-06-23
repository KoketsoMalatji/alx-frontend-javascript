export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, c) => accumulator + c.id, 0);
}
