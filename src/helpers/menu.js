import { APP_MENU_ITEMS } from '@/assets/data/menu-items';
export const getAppMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return APP_MENU_ITEMS;
};
export const getActiveClass = (activeMenuItems, key) => activeMenuItems.includes(key) ? ' active' : '';
export const findAllParent = (menuItems, menuItem) => {
  let parents = [];
  if (menuItem.parentKey) {
    const parent = findMenuItem(menuItems, menuItem.parentKey);
    if (parent) {
      parents.push(parent.key);
      if (parent.parentKey) {
        parents = [...parents, ...findAllParent(menuItems, parent)];
      }
    }
  }
  return parents;
};
export const getMenuItemFromURL = (items, url) => {
  for (const item of items) {
    if (item.url === url) return item;
    const foundItem = getMenuItemFromURL(item.children || [], url);
    if (foundItem) return foundItem;
  }
};
export const findMenuItem = (menuItems, menuItemKey) => {
  if (menuItems && menuItemKey) {
    for (const element of menuItems) {
      if (element.key === menuItemKey) {
        return element;
      }
      if (element.children) {
        const found = findMenuItem(element.children, menuItemKey);
        if (found) return found;
      }
    }
  }
  return null;
};