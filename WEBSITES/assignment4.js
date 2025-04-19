//a function that checks score and prints "Passed" if score is 180 or above, otherwise prints "Failed"
function checkScore(score) {
  if (score >= 180) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}
checkScore(200);
checkScore(150);

//a function that checks voting eligibility based on age
function checkVotingEligibility(age) {
  if (age >= 18) {
    return "You are eligible to vote";
  } else {
    return "You are not eligible to vote";
  }
}
console.log(checkVotingEligibility(25));
console.log(checkVotingEligibility(15));

//a function that accepts a name and score, then checks score level
function getGrade(name, score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Good";
  } else if (score >= 50) {
    return "Average";
  } else {
    return "Fail";
  }
}
console.log(getGrade("John", 95));
console.log(getGrade("Jane", 80));
console.log(getGrade("Bob", 60));
console.log(getGrade("Alice", 40));

//a function that checks Access based on ID and age
function checkAccess(hasID, isAbove18) {
  if (hasID && isAbove18) {
    return "Access granted";
  } else {
    return "Access denied";
  }
}
console.log(checkAccess(true, true));
console.log(checkAccess(true, false));
console.log(checkAccess(false, true));
console.log(checkAccess(false, false));

// a for loop based on score conditions
let scores = [60, 40, 70, 30, 80];

for (let grade of scores) {
  if (grade > 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

//a funtion that checks 2 scores and returns "Yes" if both are above 50, otherwise returns "No"
let checkPassedBoth = (mathScore, englishScore) => {
  if (mathScore >= 50 && englishScore >= 50) {
    return "Yes";
  } else {
    return "No";
  }
};
console.log(checkPassedBoth(60, 70));
console.log(checkPassedBoth(40, 70));

//a function that checks if signup is allowed based on email or phone number
function checkSignup(email, phoneNumber) {
  if (email || phoneNumber) {
    return "Signup allowed";
  } else {
    return "Signup denied";
  }
}
console.log(checkSignup("john@example.com", null));
console.log(checkSignup(null, "1234567890"));
console.log(checkSignup(null, null));

//a function that Validate inputs of a user based on username and password
function validateInput(username, password) {
  if (username || password) {
    return "Valid input";
  } else {
    return "Invalid input";
  }
}
console.log(validateInput("john", "password123"));
console.log(validateInput(null, "password123"));
console.log(validateInput("john", null));

//a function that checks work status based on hours of work
let checkWorkStatus = (hours) => {
  return hours >= 40 ? "Full-time" : "Part-time";
};
console.log(checkWorkStatus(45));
console.log(checkWorkStatus(30));

//a function that checks Large Numbers
let getLargerNumber = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};
console.log(getLargerNumber(10, 20));
console.log(getLargerNumber(30, 20));
