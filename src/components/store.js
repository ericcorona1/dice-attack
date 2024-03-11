import { reactive } from "vue";

export const store = reactive({
  activeMenu: "welcome",
  changeActiveMenu(menu) {
    this.activeMenu = menu;
  },
  isActive(menu) {
    return this.activeMenu === menu;
  },
  //   if item is active menue then display, but if not then hide
});
