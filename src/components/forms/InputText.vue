<template>
  <div class="flex flex-col gap-2">
    <label :for="name">{{ label }}</label>
    <InputText
        :id="name"
        v-model="value"
        :invalid="!!errorMessage"
        :disabled
    />
    <Message size="small" severity="error" variant="simple" v-if="errorMessage">{{ errorMessage }}</Message>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import {useField} from "vee-validate";

const props = defineProps({
  label: String,
  name: String,
  disabled: Boolean
})

const {value, errorMessage} = useField(() => props.name);

</script>
