<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<style>
html {
  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
  overflow-y: overlay;
}

.layout-enter-from{
  opacity: 0;
  transform: translateY(-10px);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}


::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track-piece {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}


/* For basic inputs */
input[required] + label:after {
  content: ' *';
  color: #dc2626;
}
/* For textarea inputs */
textarea[required] + label:after {
  content: ' *';
  color: #dc2626;
}
/* For select inputs */
select[required] + label:after {
  content: ' *';
  color: #dc2626;
}
/* For fieldset inputs */
fieldset[required] label:first-child:after {
  content: ' *';
  color: #dc2626;
}

input[type=radio] + label:after {
  content: '';
}


</style>

