function getGrade (s1, s2, s3) {
  let middle = (s1 + s2 + s3) /3;
  return middle >= 90 && middle <= 100 ? 'A' :
    middle >= 80 && middle < 90 ? 'B' :
    middle >= 70 && middle < 80 ? 'C' :
    middle >= 60 && middle < 70 ? 'D' : 'F'
};