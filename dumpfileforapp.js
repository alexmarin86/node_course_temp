// THIS IS THE EXAMPLE FOR EXTERNAL MODULES AND HOW TO WORK WITH THEM
// const _ = require('lodash')
// const items = [1, [2, [3, [4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log("hello world")

//THIS IS THE EXAMPLE ABOUT THE EVENT LOOP AND ASYNC RUNTIME
// const {readFile} = require('fs')
// console.log('Started a first task')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     } else {
//         console.log(result)
//         console.log('completed first task')
//     }
// })
// console.log('starting next task')

//THIS IS AN ASYNC EXAMPLE
// console.log('first')
// setTimeout(() => {
//     console.log('second')
// }, 0)
// console.log('third')

//ASYNC WITH SETINTERVAL, ANOTHER EXAMPLE
// setInterval(() => {
//     console.log('hello world')
// }, 2000)
// console.log('i will run first')

//PROMISE WITHOUT ASYNC AWAIT

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }
// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

//ASYNC AWAIT PROMISES

const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/result-mind-grenade.txt', 
        `This is awesome: 
        ${first}
        ${second}
        But still`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}
start()