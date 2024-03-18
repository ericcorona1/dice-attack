import { defineStore } from "pinia";
import { reactive } from "vue";

export const useStore = defineStore;
reactive({
  activeMenu: "welcome",
  changeActiveMenu(menu) {
    this.activeMenu = menu;
  },
  isActive(menu) {
    return this.activeMenu === menu;
  },
});

import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", () => {
  const activeMenu = ref(welcome);
  function isActive(menu) {
    activeMenu.value = menu;
  }

  return { activeMenu, isActive };
});
