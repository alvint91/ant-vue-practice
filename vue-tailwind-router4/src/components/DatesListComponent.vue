<template>
  <div
    class="bg-white px-4 text-center h-[30px] flex items-center justify-center">
    <h3>2022 DATES</h3>
  </div>
  <div class="bg-black">
    <button
      class="w-full border-[1px] border-black bg-[#252525] text-white flex justify-center items-center h-[61px] uppercase font-bold"
      v-for="item in items">
      <h3 class="uppercase font-extrabold h-fit text-[24px]">
          <span>{{item.day}}</span>
          <span class="px-[6px]">{{item.month}}</span>
          <span :class="{yellow: item.date === '18', orange: item.date === '19', red: item.date === '20', violet: item.date === '21', purple: item.date === '22', deepurple:item.date==='23', blue:item.date === '24'}">
            {{item.date}}
          </span>
      </h3>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
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
        },
      ]
    };
  }
};
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
</style>
