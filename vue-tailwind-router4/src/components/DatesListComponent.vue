<template>
  <div
    id="dates"
    class="bg-white px-4 text-center h-[30px] flex items-center justify-center sm:h-[40px] text-[16px] sm:text-[20px] md:text-[22px] lg:font-[400] lg:tracking-[-0.07em]">
    <h3>2022 DATES</h3>
  </div>
  <div
    class="bg-black grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-7 sm:p-[15px]">
    <RouterLink
      :class="{ active: item.date.includes(date) }"
      v-for="item in items"
      class="w-full border-[1px] border-black bg-[#252525] text-white flex justify-center items-center h-[61px] uppercase font-bold sm:h-[114px] md:h-[124px] lg:h-[174px] date-item"
      :to="`/events/date/may-${item.date}`">
      <h3
        :class="{ active: item.date.includes(date) }"
        class="uppercase font-extrabold h-fit text-[23px] tracking-normal sm:text-center sm:m-0 md:p-0">
        <span class="sm:block sm:leading-[.8] sm:text-[18px] sm:tracking-tight lg:text-[20px]">{{
          item.day
        }}</span>
        <span class="px-[6px] sm:block sm:leading-[.8] lg:leading-[.8] lg:text-3xl">{{ item.month }}</span>
        <span
          class="sm:text-[2.8rem] sm:block sm:leading-[.8] sm:font-black lg:text-[50px]"
          :class="{
            yellow: item.date === '18',
            orange: item.date === '19',
            red: item.date === '20',
            violet: item.date === '21',
            purple: item.date === '22',
            deepurple: item.date === '23',
            blue: item.date === '24',
            'active-number': item.date.includes(date)
          }">
          {{ item.date }}
        </span>
      </h3>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, inject, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const date = computed(() => {
  if (route.path.includes('date')) {
    return route.params.day.split('-')[1];
  }
});

const routeIncludesDate = computed(() => {
  return route.path.includes('date');
});

const items = ref([
  {
    day: 'wednesday,',
    month: 'may',
    date: '18'
  },
  {
    day: 'thursday,',
    month: 'may',
    date: '19'
  },
  {
    day: 'friday,',
    month: 'may',
    date: '20'
  },
  {
    day: 'saturday,',
    month: 'may',
    date: '21'
  },
  {
    day: 'sunday,',
    month: 'may',
    date: '22'
  },
  {
    day: 'monday,',
    month: 'may',
    date: '23'
  },
  {
    day: 'tuesday,',
    month: 'may',
    date: '24'
  }
]);
</script>

<style scoped>
.yellow {
  color: #fed474;
}
.orange {
  color: #fdb630;
}
.red {
  color: #fc2f65;
}
.violet {
  color: #e91cb1;
}
.purple {
  color: #9b1fd7;
}
.deepurple {
  color: #6424fa;
}
.blue {
  color: #373efa;
}

.active {
  background-color: #1da5fb;
  color: white;
}

.active-number {
  color: white;
}

.date-item:hover span{
  background-color: #1da5fb;
  color: white;
}
.date-item:hover {
  background-color: #1da5fb;
  color: white
}
</style>
