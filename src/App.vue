<template>
  <RouterView/>
  <ConfirmDialog :group="CONFIRM_DIALOG_GROUP"/>
  <ConfirmPopup :group="CONFIRM_POPUP_GROUP"/>
  <DynamicDialog/>
</template>

<script setup>
import {RouterView} from 'vue-router'
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import DynamicDialog from 'primevue/dynamicdialog';
import {CONFIRM_DIALOG_GROUP, CONFIRM_POPUP_GROUP} from "@/common/conts.js";

</script>
