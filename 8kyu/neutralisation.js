// https://www.codewars.com/kata/65128732b5aff40032a3d8f0/solutions
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.

function (s1, s2){
    let newS = ""

    for (let i = 0; i < s1.length; i++){
        if (s1[i] == "+" && s2[i] == "+"){
            return newS += "+"
        }else if (s1[i] == "-" && s2[i] == "-"){
            return newS += "-"
        }else {
            return new += "0"
        }
    }
    return newS
}