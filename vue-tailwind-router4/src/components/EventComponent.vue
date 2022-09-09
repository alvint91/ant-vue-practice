<template>
  <h3 class="p-[7px] uppercase text-[12px] font-bold bg-white h-fit">
    {{date}}
  </h3>
  <div class="bg-black uppercase h-fit p-5 font-bold">
    <h2 class="text-[#1da5fb] text-[24px]">{{artist}}</h2>
    <h3 class="text-white text-[15px]">{{location}}</h3>
    <h4 class="text-[#757575] text-[12px] mb-2">
      <p>{{date}}</p>
      <p>{{time}}</p>
    </h4>
    <a :href="ticketInfo" class="text-white text-[11px]">
      <div class="bg-[#1da5fb] px-[10px] py-[7px] w-[150px] text-center mb-2">
        buy tickets
      </div>
    </a>
    <a :href="artistInfo" class="text-white text-[11px]">
      <div class="px-[10px] py-[7px] w-[150px] text-center border-[#1da5fb] border-solid border-[1px] mb-2">
        more info
      </div>
    </a>
  </div>
</template>

<script></script>
