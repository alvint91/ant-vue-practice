
<template>
  <div class="flex justify-center">
   <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
        <div class="space-y-2">
          <span class="block w-8 h-0.5 bg-white animate-pulse"></span>
          <span class="block w-8 h-0.5 bg-white animate-pulse"></span>
          <span class="block w-8 h-0.5 bg-white animate-pulse"></span>
        </div>
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-56 py-[10px] px-5 origin-top-right bg-[#252525] focus:outline-none">
        <div>
          <MenuItem
          v-slot="{ active }"
          class="border-b-[1px] border-[rgba(255,255,255,0.2)] border-dotted text-white uppercase block py-1"
          v-for="item in menuItems">
            <a :href="item.path" class="text-white h-10 font-semibold text-sm flex items-center">
              {{item.name}}
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
  <!-- <RouterLink to="/events" class="text-white text-[11px]">
    all events
  </RouterLink> -->
  </div>
</template>

<script setup>
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
  import { inject } from 'vue'
  const menuItems = inject('menuItems')
</script>
