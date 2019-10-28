export default {
  install(Vue,options)
  {
    Vue.prototype.getTitle = {
      state:'',
      isBack: true,
      isAdd:  false,
    };
  }
}