export default {
  install(Vue, options) {
    // 1. add global method or property
    Vue.myGlobalMethod = function() {
      console.log("myGlobalMethod");
    };

    // 2. add a global asset
    Vue.directive("my-directive", {
      bind(el, binding, vnode, oldVnode) {
        console.log("my-directive");
      }
    });

    // 3. inject some component options
    Vue.mixin({
      created: function() {
        console.log("mixin-plugin");
      }
    });

    // 4. add an instance method
    Vue.prototype.$myMethod = function(methodOptions) {
      console.log("myMethod");
    };
  }
};
