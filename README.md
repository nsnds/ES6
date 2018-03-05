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

#### 扩展运算符和set运算符

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


```