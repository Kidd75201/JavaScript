function passExam(name, score) {
    const passUni = 71;
    const passColl = 51;

    if (score >= passUni) {
        console.log(name + ' has enrolled in University with ' + score + ' points');
    } else if (score >= passColl) {
        console.log(name + ' has enrolled in College with ' + score + ' points');
    }else {
        console.log(name + ' has failed');
    }
}

function calcScore(quiz, essay) {
    const finalScore = quiz + essay;
    return finalScore;
}

passExam('John', calcScore(45, 40));
passExam('Mary', 65);
passExam('Bob', 45);