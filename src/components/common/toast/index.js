// 引入组件选项对象
import Toast from "./Toast";
const obj = {};

obj.install = function (Vue) {
  // 创建组建构造器
  const ToastConstructor = Vue.extend(Toast);

  // 创建toast组件实例
  const toast = new ToastConstructor();

  // 创建组件用于挂载的元素
  const div = document.createElement('div');

  // 将组件手动进行挂载
  toast.$mount(div);

  // 将组件添加至DOM中
  document.body.appendChild(toast.$el);
  // 将组件实例传给$toast属性，使其他组件实例能够通过$toast属性使用toast组件的方法
  Vue.prototype.$toast = toast;
};
// 导出插件
export default obj;
