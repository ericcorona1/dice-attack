import { reactive } from "vue";

export const store = reactive({
  activeMenu: "welcome",
  changeActiveMenu(menu) {
    this.activeMenu = menu;
  },
});
