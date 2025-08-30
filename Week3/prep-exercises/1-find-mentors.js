import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
    return mentors.reduce((acc, mentor) => {
        if (mentor.canTeach.includes(moduleName)) {
            acc.push(mentor.name)
        }
        return acc
    }, [])
};
// You can uncomment out this line to try your function
console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
    const chosenMentors = possibleMentorsForModule(moduleName)

    if (chosenMentors.length < 1) {
        return
    }

    const random = Math.floor(Math.random() * chosenMentors.length)
    return chosenMentors[random]
};
// You can uncomment out this line to try your function
console.log(findMentorForModule('javascript'));