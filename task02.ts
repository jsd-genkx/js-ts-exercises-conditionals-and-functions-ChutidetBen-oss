// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = 18 ;
// Try changing to "hello", 10, null, NaN
// if (true) {
//     console.log(`Your in put: ${userInput} || type is ${typeof(userInput)} || ${Boolean(userInput)}`);
// }
//isNaN เป็นการตั้งคำถามว่าเป็น NaN หรือไม่และคำตอบที่ได้จาก is จะเป็น True and False เท่านั้น
if (typeof(userInput) === 'number' && !isNaN(userInput)){
    console.log(`This in put : ${userInput} is number `)
} else {
    console.log(`This in put : ${userInput} is NOT a number and this type is ${typeof(userInput)}`)
}
