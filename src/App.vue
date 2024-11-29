<template>
  <RouterView/>
  <ConfirmDialog/>
  <ConfirmPopup/>
  <DynamicDialog/>
</template>

<script setup>
import {RouterView} from 'vue-router'
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import DynamicDialog from 'primevue/dynamicdialog';

</script>
