/***********************************************************************************************************************/
/***********************************************************************************************************************/
/** 题目1：编写一个 People 类，使其的实例具有监听事件、触发事件、解除绑定功能。（实例可能监听多个不同的事件，也可以去除监听事件）*/
/***********************************************************************************************************************/
/**********************************************************************************************************************/
class People {
  constructor(name) {
    this.name = name
  }

  // TODO: 请在此处完善代码
  evtLoop = [] // 自定义事件队列

  // 监听事件
  on(evtType, func) {
    this.validate(func)
    this.evtLoop.push({ evtType, func })
  }

  // 触发事件
  emit(eventType, options) {
    this.evtLoop.filter(({ evtType }) => eventType === evtType).forEach(item => item.func(options))
  }

  // 销毁事件
  off(evtType, func) {
    this.validate(func)
    const idx = this.evtLoop.findIndex(item => item.evtType === evtType && item.func === func)
    idx < 0 && this.evtLoop.splice(idx, 1)
  }

  // 校验
  validate(func) {
    if (typeof func !== 'function') {
      throw new Error('监听事件必须是一个函数，请重新输入')
    }
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`)
  }
}

/* 以下为测试代码 */
const say1 = greeting => {
  console.log(`${greeting}, nice meeting you.`)
}

const say2 = greeting => {
  console.log(`${greeting}, nice meeting you, too.`)
}

const jerry = new People('Jerry')
jerry.sayHi()
// => 输出：'Hi, I am Jerry'

jerry.on('greeting', say1)
jerry.on('greeting', say2)

jerry.emit('greeting', 'Hi')
// => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'

jerry.off('greeting', say1)
jerry.emit('greeting', 'Hi')
// => 只输出：'Hi, nice meeting you, too'

/*************************************************************************/
/*************************************************************************/
/************** 题目2：完成 sleep 函数，可以达到下面的效果 ******************/
/*************************************************************************/
/*************************************************************************/
const sleep = duration => {
  // TODO
  return new Promise(resolve => setTimeout(resolve, duration))
}

const anyFunc = async () => {
  console.log('123') // 输出 123
  await sleep(300) // 暂停 300 毫秒
  console.log('456') // 输出 456，但是距离上面输出的 123 时间上相隔了 300 毫秒
}

/**********************************************************************************************************/
/**********************************************************************************************************/
/** 题目3：完成 deepGet 函数，给它传入一个对象和字符串，字符串表示对象深层属性的获取路径，可以深层次获取对象内容：**/
/**********************************************************************************************************/
/**********************************************************************************************************/
const deepGet = (obj, prop) => {
  // TODO: 在此处完善代码
  const keyArr = prop.split('.').map(item => item)

  const reducer = (acc, cur) => {
    // 提取students[1]字符窜中的子窜student
    const objKey = cur.includes('[') && cur.replaceAll(/[\[?=0-9\]$]/gi, '')
    if (Array.isArray(acc[objKey])) {
      // 提取students[1]字符窜中的数字1
      cur = cur.replaceAll(/[^?=0-9]/gi, '')
      return acc[objKey][cur] || {}
    }
    return acc[cur] ? acc[cur] : {}
  }

  const result = keyArr.reduce(reducer, obj)
  return Object.keys(result).length ? result : undefined
}

/** 以下为测试代码 */
deepGet(
  {
    school: {
      student: { name: 'Tomy' }
    }
  },
  'school.student.name'
) // => 'Tomy'

deepGet(
  {
    school: {
      students: [{ name: 'Tomy' }, { name: 'Lucy' }]
    }
  },
  'school.students[1].name'
) // => 'Lucy'

// 对于不存在的属性，返回 undefined
deepGet({ user: { name: 'Tomy' } }, 'user.age') // => undefined
deepGet({ user: { name: 'Tomy' } }, 'school.user.age') // => undefined

/**********************************************************************************************************/
/**********************************************************************************************************/
/****** 题目4：完成 combo 函数。它接受任意多个单参函数（只接受一个参数的函数）作为参数，并且返回一个函数 **********/
/****** 它的作用：使得类似 f(g(h(a))) 这样的函数调用可以简写为 combo(f, g, h)(a)  *****************************/
/**********************************************************************************************************/
/**********************************************************************************************************/
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
testForCombo(666)
// => ["4", "4", "5"]

/**********************************************************************************************************/
/**********************************************************************************************************/
/********** 题目5：有两个盘子分别放有 5 个和 7 个小球，两个朋友玩游戏：每个人轮流从两个盘子中拿小球，*************/
/********** 每人每次只能从其中一个盘子中拿，每次可以拿 1 个或者多个（不能一个都不拿），拿到最后一个小球的人算输****/
/********** 问开局先手和后手是否有必胜策略？如果有，请描述必胜策略。*******************************************/
/**********************************************************************************************************/
/**********************************************************************************************************/
// 有必胜策略：主要思路为最后一轮两盘中至少留有一个球，且最后一轮轮到他人拿。
// 假设： 1号盘子: 5个球， 2号盘子7个球， 一个小朋友名为小A，另一名为小B
// 1. 小A先手： 先拿2号盘子的2个小球，只要先手的一方尽量保证两个盘子的数量相同的就行，直至决胜轮
// 2. 小A后手：暂未想到
