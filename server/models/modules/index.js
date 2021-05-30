class Modules {
  get() {}

  post(cxt) {
    const { body } = cxt.request
    console.log(body)
    // 保存数据
    this.saveModules(body)
    // 返回操作状态
    return this.response(cxt, body)
  }

  del = () => {}
  batch = () => {}

  useModules(cxt) {
    const method = cxt.request.method.toLowerCase()
    const m = method === 'delete' ? 'del' : method
    this[m](cxt)
  }

  saveModules(body) {
    this.readFileContent()
    this.wirteFilesContent()
  }

  response(cxt, body) {
    return []((cxt.body = [{ text: 'oo' }]))
  }

  readFileContent() {}

  wirteFilesContent() {}
}

module.exports = { useModules: new Modules().useModules }
