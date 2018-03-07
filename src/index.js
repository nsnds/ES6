// var a = 2
// {
//   var a = 3
// }
// console.log(a)

// let a = 2
// {
//   let a = 3
// }
// console.log(a)

// {
//   let a = 3
// }
// console.log(a)

// for (var i = 0; i < 10; i++) {
//   console.log('for中：' + i)
// }
// console.log('for外：' + i)

// for (let i = 0; i < 10; i++) {
//   console.log('for中：' + i)
// }
// console.log('for外：' + i)

// const a = 'qm'
// a = '邱敏'
// console.log(a)

// let [a, b, c] = [1, 2, 3]
// console.log(a + '\n' + b +'\n' + c)

// let [a, b, d]=[1, [2,3], 4];
// console.log(a, b, d)

// let [foo = true] = []
// console.log(foo)

// let [a, b = 'qm'] = ['邱敏']
// console.log(a, b)

// let [a, b = 'qm'] = ['邱敏', undefined]
// console.log(a, b)

// let [a, b = 'qm'] = ['邱敏', null]
// console.log(a, b)

// let {a, b} = {a: 1, b: 2}
// console.log(a, b)

// let a
// {a} = {a: 'qm'}

// let a
// ({a} = {a: 'qm'})
// console.log(a)

// const [a, b, c, d, e, f] = 'nhwsqm'
// console.log(a, b, c, d, e, f)

// const arr1 = [1, 2, 3]
// const arr2 = arr1
// console.log(arr2)
// arr2.push(4)
// console.log(arr1)

// const arr1 = [1, 2, 3]
// const arr2 = [...arr1]
// console.log(arr2)
// arr2.push(4)
// console.log(arr1)

// function qm(first, ...arg) {
//   console.log(arg.length)
// }
// qm(0, 1, 2, 3, 4, 5, 6, 7)

// function qm(first, ...arg) {
//   for (let i of arg) {
//     console.log(i)
//   }
// }
// qm(0, 1, 2, 3, 4, 5, 6, 7)

// let qm = '邱敏'
// let first = `这是字符串模版的基础使用${qm}`
// console.log(first)

// let a = 1
// let b = 2
// let result = `${a + b}`
// console.log(result)

// let qm = '器皿'
// // let str = '器皿字符串的查找'
// // let str = '字器皿符串的查找'
// let str = '字符串的查找器皿'
// console.log(str.includes(qm))
// console.log(str.startsWith(qm))
// console.log(str.endsWith(qm))

// console.log('qmxiaopang|'.repeat(3))

// console.log(Number.isFinite(1))
// console.log(Number.isFinite(1.2))
// console.log(Number.isFinite('1'))
// console.log(Number.isFinite(NaN))
// console.log(Number.isFinite(undefined))

// console.log(Number.isInteger(123.1))
// console.log(Number.isInteger(123.0))

// console.log(Number.parseInt(9.3))

// console.log(Number.parseFloat(9.3))
// console.log(Number.parseFloat(9.0))

// console.log(Math.pow(2, 53)-1)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)

// let json = {
//   '0': 'qm',
//   '1': '小胖',
//   '2': '干啥子',
//   length: 3
// }

// let arr = Array.from(json)
// console.log(arr)

// let arr = Array.of(1, 2, 3, 4)
// console.log(arr)

// let arr = Array.of('qm', 'js', 'css')
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6]
// let ren = arr.find(function(val, idx, arr) {
//   return val > 2
// })
// console.log(ren)

// let arr = [0, 1, 2, 3, 4, 5, 6, 7]
// arr.fill('qmxiaopang', 3, 7)
// console.log(arr)

// let arr = ['html', 'js', 'css']
// // for (let i of arr) {
// //   console.log(i)
// // }
// // for (let idx of arr.keys()) {
// //   console.log(idx)
// // }
// for (let [idx, i] of arr.entries()) {
//   console.log(`索引:${idx}、值：${i}`)
// }

// let arr = ['html', 'js', 'css']
// let list = arr.entries()
// console.log(list.next().value)
// console.log(list.next().value)
// console.log(list.next().value)

// function add(a, b = 1) {
//   return a + b
// }
// console.log(add(1))

function add(a, b = 1) {
  if (a === 0) {
    throw new Error('this is error')
  }
  return a + b
}
console.log(add(0))