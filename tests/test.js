// class People {
//   constructor(name) {
//     this.name = name
//   }

//   // TODO: 请在此处完善代码
//   evtLoop = [] // 自定义事件队列

//   // 监听事件
//   on(evtType, func) {
//     this.validate(func)
//     this.evtLoop.push({ evtType, func })
//   }

//   // 触发事件
//   emit(eventType, options) {
//     this.evtLoop.filter(({ evtType }) => eventType === evtType).forEach(item => item.func(options))
//   }

//   // 销毁事件
//   off(evtType, func) {
//     this.validate(func)
//     const idx = this.evtLoop.findIndex(item => item.evtType === evtType && item.func === func)
//     idx < 0 && this.evtLoop.splice(idx, 1)
//   }

//   validate(func) {
//     if (typeof func !== 'function') {
//       throw new Error('监听事件必须是一个函数，请重新输入')
//     }
//   }

//   sayHi() {
//     console.log(`Hi, I am ${this.name}`)
//   }
// }

// /* 以下为测试代码 */
// const say1 = greeting => {
//   console.log(`${greeting}, nice meeting you.`)
// }

// const say2 = greeting => {
//   console.log(`${greeting}, nice meeting you, too.`)
// }

// const jerry = new People('Jerry')
// jerry.sayHi()
// // => 输出：'Hi, I am Jerry'

// jerry.on('greeting', say1)
// jerry.on('greeting', say2)

// jerry.emit('greeting', 'Hi')
// // // => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'

// jerry.off('greeting', say1)
// jerry.emit('greeting', 'Hi')
// // => 只输出：'Hi, nice meeting you, too'
// const sleep = duration => {
//   // TODO
//   return new Promise(resolve => setTimeout(resolve, duration))
// }

// const anyFunc = async () => {
//   console.log('123') // 输出 123
//   await sleep(300) // 暂停 300 毫秒
//   console.log('456') // 输出 456，但是距离上面输出的 123 时间上相隔了 300 毫秒
// }

// anyFunc()

// const deepGet = (obj, prop) => {
//   // TODO: 在此处完善代码
//   const keyArr = prop.split('.').map(item => item)

//   const reducer = (acc, cur) => {
//     // 提取students[1]字符窜中的子窜student
//     const objKey = cur.includes('[') && cur.replaceAll(/[\[?=0-9\]$]/gi, '')
//     if (Array.isArray(acc[objKey])) {
//       // 提取students[1]字符窜中的数字1
//       cur = cur.replaceAll(/[^?=0-9]/gi, '')
//       return acc[objKey][cur] || {}
//     }
//     return acc[cur] ? acc[cur] : {}
//   }

//   const result = keyArr.reduce(reducer, obj)
//   return Object.keys(result).length ? result : undefined
// }

// console.log(deepGet({ user: [{ name: 'Tomy' }] }, 'user[0].name'))

const combo = (...funcs) => {
  // TODO: 请在此处完善代码
  funcs.length && funcs.reverse()
  return prop =>
    funcs.reduce((acc, cur) => {
      return cur(acc)
    }, prop)
}

/* 以下为测试代码 */
const addOne = a => a + 1
const multiTwo = a => a * 2
const divThree = a => a / 3
const toString = a => a + ''
const split = a => a.split('')

split(toString(addOne(multiTwo(divThree(666)))))
// => ["4", "4", "5"]

const testForCombo = combo(split, toString, addOne, multiTwo, divThree)
console.log(testForCombo(666))
// => ["4", "4", "5"]
