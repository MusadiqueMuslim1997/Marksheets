var eng, urdu, math, mo, per, grade, remark
eng = +prompt("Enter your English paper marks out of 100")
urdu = +prompt("Enter your Urdu paper marks out of 100")
math = +prompt("Enter your Maths paper marks out of 100")

document.write("Total Marks : 300 <br>" )

mo = eng + urdu + math
document.write("Obtained Marks :" + " " + mo + "<br>")
per = (mo/300)*100
document.write("Percentage :" + " " + per + "%" + "<br>")

if(per >= "80"){
   document.write("Grade : A-One" + "<br>")
}
else if(per >= "70"){
   document.write("Grade : A" + "<br>")
}
else if(per >= "60"){
   document.write("Grade : B" + "<br>")
}
else {
   document.write("Grade : Fail" + "<br>")
}
 if(per >= "80"){
   document.write("Remarks : Excellent")
 }
 else  if(per >= "70"){
   document.write("Remarks : Good")
 }
 else  if(per >= "60"){
   document.write("Remarks : You need to improve")
 }
 else {
   document.write("Remarks : Sorry")
 }

