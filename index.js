import fullpage from 'fullpage.js/dist/fullpage.extensions.min'
import 'fullpage.js/dist/fullpage.css'

function destory() {
  if (typeof fullpage_api !== 'undefined' && typeof fullpage_api.destroy !== 'undefined') {
    fullpage_api.destroy('all')
  }
}

const fullpageDirective = globalOptions => {
  return {
    bind(el, binding, vnode) {
    },
    inserted(el, binding, vnode) {
      const self = vnode.context
      const options = binding.value
      // 将fullpage实列挂载到组件实列上
      self[binding.arg || 'myFullpage'] = new fullpage(el, Object.assign(globalOptions, options))
    },
    update(el, binding, vnode) {
    },
    unbind(el, binding, vnode) {
      const self = vnode.context
      if (self[binding.arg || 'myFullpage']) {
        destory()
      }
    }
  }
}

const install = function (Vue, globalOptions = {}) {
  Vue.directive('fullpage', fullpageDirective(globalOptions))
}
export default install
