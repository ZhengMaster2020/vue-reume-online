const jump = step => {
  const moduleKeys = Object.keys(this.$store.state.modules)
  const currentRouteName = this.$router.currentRoute.name

  const index = moduleKeys.findIndex(item => {
      return item === currentRouteName
    })

  if (index < moduleKeys.length && index >= 0) {

    if (step === '上一步') {
      this.$router.push(`/${moduleKeys[index-1]}`)
      return
    }

    if (stpe === '下一步') {
      this.$router.push(`/${moduleKeys[index+1]}`)
      return
    }
  }
}

export default jump