# ES6

#### 声明变量

**var：用来声明全局变量**
```js
var a = 2
{
  var a = 3
}
console.log(a) 		//3
```

**let：用来声明局部变量**
```js
var a = 2
{
  let a = 3
}
console.log(a) 		//2
```

```js
{
  let a = 3
}
console.log(a) 		//报错，a is not defined
```

<font color="red">let可以防止发生数据污染</font>
```js
for (var i = 0; i < 10; i++) {
  console.log('for中：' + i)
}
console.log('for外：' + i)

/*
	for中：0
	for中：1
	for中：2
	for中：3
	for中：4
	for中：5
	for中：6
	for中：7
	for中：8
	for中：9
	for外：10
*/

for (let i = 0; i < 10; i++) {
  console.log('for中：' + i)
}
console.log('for外：' + i)

/*
	for中：0
	for中：1
	for中：2
	for中：3
	for中：4
	for中：5
	for中：6
	for中：7
	for中：8
	for中：9
	i is not defined
*/
```

**const：用来声明一个不再改变的变量，如: 对象**
```js
const a = 'qm'
var a = '邱敏' 		//打包报错，提示a是只读的，不可更改
console.log(a)
```

#### 变量的解构赋值

<font color="red">ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构</font>

**数组解构赋值**
```js
let [a, b, c] = [1, 2, 3]
console.log(a + '\n' + b +'\n' + c)

/*
	1
	2
	3
*/

左右两边数据格式要统一
let [a, [b, c], d]=[1, [2, 3], 4];
console.log(a + '\n' + b +'\n' + c + '\n' + d)

/*
	1
	2
	3
	4
*/

let [a, b, d]=[1, [2, 3], 4];
console.log(a, b, d) 	//1 [2, 3] 4
```

**解构的默认值**
```js
let [foo = true] = []
console.log(foo) 	//true

// 给多个变量赋予默认值
let [a, b = 'qm'] = ['邱敏']
console.log(a, b)

// undefined，表示未定义，所以会被赋予默认值
let [a, b = 'qm'] = ['邱敏', undefined]
console.log(a, b)	//邱敏 qm

// null，表示空，但是有值，值为null
let [a, b = 'qm'] = ['邱敏', null]
console.log(a, b)	//邱敏 null

```

**对象的解构赋值**
```js
let {a, b} = {a: 1, b: 2}
console.log(a, b)	//1 2
```

<font color="red">对象解构时，变量必须与属性同名，才能取到正确的值</font>

**圆括号的使用**
```js
// 在解构前就定义了变量，会报错
let a
{a} = {a: 'qm'} 	//提示语法错误，Unexpected token

// 可以使用圆括号包裹
let a
({a} = {a: 'qm'})
console.log(a) 		//qm
```

**字符串的解构赋值**
```js
const [a, b, c, d, e, f] = 'nhwsqm'
console.log(a, b, c, d, e, f)	//n h w s q m
```

#### 扩展运算符和rest运算符

可以很好的解决参数和对象数组未知情况下的代码编写

<font color="red">这两个运算符都是...</font>

**对象扩展运算符**

```js
// 方法传参
function func(...arg) {
  console.log(arg[0])
  console.log(arg[1])
  console.log(arg[2])
  console.log(arg[3])
}

func(1, 2, 3)	//1 2 3 undefined

// 对象数组赋值
const arr1 = [1, 2, 3]
const arr2 = arr1
console.log(arr2)
arr2.push(4)
console.log(arr1) 		//这时arr1也会被改变，因为arr2的值是对内存堆栈的引用，不是真正的赋值

const arr1 = [1, 2, 3]
const arr2 = [...arr1]
console.log(arr2)
arr2.push(4)
console.log(arr1) 		//这时赋值操作正确
```

**rest运算符**
```js
// 基本使用
function qm(first, ...arg) {
  console.log(arg.length)
}
qm(0, 1, 2, 3, 4, 5, 6, 7) 		// 7

// 获取每项的值
function qm(first, ...arg) {
  for(let val of arg) {
    console.log(val)
  }
}
qm(0, 1, 2, 3, 4, 5, 6, 7) 		// 1 2 3 4 5 6 7
```

#### 字符串模版
```js
// 基本使用
let qm = '邱敏'
let first = `这是字符串模版的基础使用${qm}`
console.log(first)

// 还可以进行数值的运算
let a = 1
let b = 2
let result = `${a + b}`
console.log(result)
```

**字符串查找**
```js
let qm = '器皿'
let str = '器皿字符串的查找'
console.log(str.includes(qm)) 		//存在返回true

// 开头是否存在
let qm = '器皿'
let str = '字器皿符串的查找'
console.log(str.startsWith(qm)) 	// false

// 结尾是否存在
let qm = '器皿'
let str = '字符串的查找器皿'
console.log(str.endsWith(qm)) 	// true
```

**复制字符串**
```js
console.log('qmxiaopang|'.repeat(3)) 		// qmxiaopang|qmxiaopang|qmxiaopang|
```

#### 数字操作

**是否为数字**
```js
console.log(Number.isFinite(1)) 	//true
console.log(Number.isFinite(1.2)) 	//true
console.log(Number.isFinite('1'))	//false
console.log(Number.isFinite(NaN)) 	//false
console.log(Number.isFinite(undefined)) 	//false
```

**是否为整数**
```js
console.log(Number.isInteger(123.1)) 	//false
console.log(Number.isInteger(123.0)) 	//true
```

**转换为整数**
```js
console.log(Number.parseInt(9.3)) 	// 9
```

**转换为浮点数**
```js
console.log(Number.parseFloat(9.3)) 	// 9.3
console.log(Number.parseFloat(9.0)) 		// 9
```

**最大安全整数、最小安全整数**
```js
// 整数取值范围，是2的53次方
console.log(Math.pow(2, 53)-1) 		// 9007199254740991

// 最大安全整数
console.log(Number.MAX_SAFE_INTEGER) 		// 9007199254740991

// 最小安全整数
console.log(Number.MIN_SAFE_INTEGER) 		// -9007199254740991

// 判断是否为安全整数
console.log(Number.isSafeInteger(Math.pow(2, 53)-1)) 		// false

```

#### 数组

**json<font color="red">数组</font>格式**
```js
// json数组的数据结构
let json = {
  '0': 'qm',
  '1': '小胖',
  '2': '干啥子',
  length: 3
}
```

**json数组转换成数组**
```js
let json = {
  '0': 'qm',
  '1': '小胖',
  '2': '干啥子',
  length: 3
}

let arr = Array.from(json)
console.log(arr) 		// ['qm', '小胖', '干啥子']
```

**Array.of()**
```js
// 数字转换成数组
let arr = Array.of(1, 2, 3, 4)
console.log(arr) 		// [1, 2, 3, 4]

// 字符串转换成数组
let arr = Array.of('qm', 'js', 'css')
console.log(arr) 		// ['qm', 'js', 'css']
```

**find()**
find()是<font color="red">实例</font>方法，实例方法就是Array的实例才能用的方法
```js
// val: 表示当前查找的值、idx: 表示当前查找的索引、arr: 表示当前数组
let arr = [1, 2, 3, 4, 5, 6]
let ren = arr.find(function(val, idx, arr) {
  return val > 2
})
console.log(ren) 		// 3
```

**fill()**
fill()是<font color="red">实例</font>方法
```js
// 接收3个参数，第一个：填充的变量、第二个：开始填充的索引、第三个：结束填充的索引(不含)
let arr = [0, 1, 2, 3, 4, 5, 6, 7]
arr.fill('qm', 3, 7)
console.log(arr) 		// [0, 1, 2, 'qm', 'qm', 'qm', 'qm', 7]
```

**for of 循环**
```js
let arr = ['html', 'js', 'css']

// 获取每一项
for (let i of arr) {
  console.log(i)
}

// 获取索引
for (let idx of arr.keys()) {
  console.log(idx)
}

// 获取每一项和索引
for (let [idx, i] of arr.entries()) {
  console.log(`索引:${idx}、值：${i}`)
}

```

**entries()**
entries()是<font color="red">实例</font>方法
```js
// entries()可以生成Iterator形式的数组，获取时需要手动next()跳转下一个值
let arr = ['html', 'js', 'css']
let list = arr.entries()
console.log(list.next().value) 		// [0, html]
console.log(list.next().value) 		// [1, js]
console.log(list.next().value) 		// [2, css]
```

#### 箭头函数

**默认值**
```js
function add(a, b = 1) {
  return a + b
}
console.log(add(1))
```

**主动抛出错误**
```js
function add(a, b = 1) {
  if (a === 0) {
    throw new Error('this is error')
  }
  return a + b
}
console.log(add(0)) 	// Uncaught Error: this is error
```

**严格模式**
```js
// 函数若使用了默认值，又使用了严格模式，两者冲突会报错
function add(a, b = 1) {
  'use strict'
  ...
}
```

**获取传参的长度**

<font color="red">func.length</font>

```js
function add(a, b) {
  'use strict'
  if (a === 0) {
    throw new Error('this is error')
  }
  return a + b
}

console.log(add.length) 		// 2

function add(a, b = 1) {
  if (a === 0) {
    throw new Error('this is error')
  }
  return a + b
}
console.log(add.length) 		// 1
```

**箭头函数**
```js
// 基础使用
let add = (a, b = 1) => a + b
console.log(add(1)) 		// 2

// {}的使用
let add = (a, b = 1) => {
  console.log('jspang')
  return a + b
}
console.log(add(1)) 		// 2
```

**对象的函数解构**
```js
let json = {
  a: 'js',
  b: 'html'
}
function func({a, b}) {
  console.log(a, b)
}
func(json) 		// js html
```

**数组的解构赋值**
```js
let arr = ['js', 'html', 'css']
function func(a, b, c) {
  console.log(a, b, c)
}
func(...arr) 		// js html css
```

**in**

用来判断对象或数组中是否存在某键

```js
// 对象
let obj = {
  a: 'js',
  b: 'html'
}
console.log('a' in obj) 		// true
console.log('c' in obj) 		// false

// 数组
let arr = [,,,,]
console.log(arr.length) 		// 4

console.log(0 in arr) 		// false

let arr1 = ['js', 'html']
console.log(0 in arr1) 		// true，0是指0索引是否有元素
```

**数组遍历方法**

```js
let arr = ['js', 'html', 'css']

// filter
arr.filter(x => console.log(x))

// some
arr.some(x => console.log(x))

// map
let arr1 = arr.map(x => 'qm')
console.log(arr1)
```

#### 对象

**对象赋值**
```js
let name = 'qm'
let age = 23
const obj = {name, age}
console.log(obj)
```

**对象key值构建**
```js
let key = 'qm'
const obj = {
  [key]: 'qiumin'
}
console.log(obj)
```

**对象比较**
```js
console.log(+0 === -0) 		// true
console.log(NaN === NaN) 		//false
console.log(Object.is(+0, -0)) 		//false
console.log(Object.is(NaN, NaN)) 		//true
```

**合并对象**
```js
const a = {a: 'qm'}
const b = {b: 'qiumin'}
const c = {c: 'nsnds'}
const d = Object.assign(a, b, c)
console.log(d) 		// {a: 'qm', b: 'qiumin', c: 'nsnds'}
```

#### symbol

**全局标记**

**打印**
```js
const a = Symbol('qm')
console.log(a) 		// 红色的 Symbol(qm)
console.log(a.toString()) 		// 黑色的 Symbol(qm)
```

**对象中的应用，创建对象的key、调用、赋值**
```js
const qm = Symbol()
const obj = {
  [qm]: 'qiumin'
}
console.log(obj[qm]) 		// qiumin
obj[qm] = 'name'
console.log(obj[qm]) 		// name
```

**对象元素的保护作用**
```js
// 不保护
const obj = {name: 'qm', age: 23, skill: 'web'}
for (let i in obj) {
  console.log(obj.i)
}

// 保护年龄
const obj = {name: 'qm', skill: 'web'}
const age = Symbol()
obj[age] = 18
for (let i in obj) {
 console.log(obj[i]) 		// qm web
}
console.log(obj) 		// { name: 'qm', skill: 'web', Symbol(): 18]
```

#### Set、Weakset数据结构

**是<font color="red">数据结构</font>，不是数据类型**

**Set的声明**
```js
const setArr = new Set(['qm', 'qiumin', 'web', 'nsnds'])
console.log(setArr) 		// Set(4) {'qm', 'qiumin', 'web', 'nsnds'}
```

**Set值的新增**
```js
const setArr = new Set(['qm', 'qiumin', 'web', 'nsnds'])
console.log(setArr) 		// Set(4) {'qm', 'qiumin', 'web', 'nsnds'}

setArr.add('es6')
console.log(setArr) 		// // Set(5) {'qm', 'qiumin', 'web', 'nsnds', 'es6'}
```

**Set值的删除、清除**
```js
// delete
const setArr = new Set(['qm', 'qiumin', 'web', 'nsnds'])
console.log(setArr) 		// Set(4) {'qm', 'qiumin', 'web', 'nsnds'}

setArr.delete('nsnds')
console.log(setArr) 		// Set(3) {'qm', 'qiumin', 'web'}

setArr.clear()
console.log(setArr) 		// Set(0) {}
```

**Set值的查找**
```js
const setArr = new Set(['qm', 'qiumin', 'web', 'nsnds'])
console.log(setArr.has('qm')) 		// true
```

**Set遍历**
```js
const setArr = new Set(['qm', 'qiumin', 'web', 'nsnds'])
for (let i of setArr) {
  console.log(i)
}
```






































