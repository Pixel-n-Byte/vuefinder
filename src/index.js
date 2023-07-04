import components from "./components";
import "./assets/css/index.css";
import "./assets/stylesheets/_explorer.css";
import "./assets/stylesheets/_searchbar.css";
import "./assets/stylesheets/_toolbar.css";
import "./assets/stylesheets/_modallayout.css";
import "microtip/microtip.css";

export default {
  install(Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  },
};
