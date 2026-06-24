<script setup lang="ts">
const NavItemComp = resolveComponent('NavItem')
const NavDropdownComp = resolveComponent('NavDropdown')

const { navItems, hobbiesItems } = useNavItems()

const desktopItems = computed(() => navItems.value.map(item =>
  item.id === 'hobbies'
    ? { ...item, component: NavDropdownComp, items: hobbiesItems.value }
    : { ...item, component: NavItemComp },
))
</script>

<template>
  <nav class="flex h-full items-stretch self-stretch">
    <component
      :is="item.component"
      v-for="item in desktopItems"
      :key="item.id"
      v-bind="item"
      size="base"
      uppercase
    />
  </nav>
</template>
