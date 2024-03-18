import { ref } from "vue";
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", () => {
  const activeMenu = ref(welcome);
  function isActive(menu) {
    activeMenu.value = menu;
  }

  return { activeMenu, isActive };
});
