<template>
  <Card>
    <template #title>
      Login
    </template>
    <template #content>
      <form @submit="onSubmit" class="flex flex-col gap-2">
        <InputText name="email" label="Email" :disabled="isSubmitting"/>
        <InputText name="password" label="Password" :disabled="isSubmitting"/>
        <div class="flex justify-end">
          <Button variant="text" label="Submit" type="submit" :disabled="isSubmitting"/>
        </div>
      </form>
    </template>
  </Card>
</template>

<script setup>
import {useForm} from "vee-validate";
import {LoginFormSchema} from "@/schemas/login.schema.js";
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "@/components/forms/InputText.vue";

const {handleSubmit, isSubmitting} = useForm({
  validationSchema: LoginFormSchema,
});

const onSubmit = handleSubmit((values) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resolve();
    }, 2000)
  })
})
</script>
