<template>
    <div class="offer-container">
        <h1 class="offer-title">Hoziroq biz bilan bog'lanish uchun telefon raqamingizni qoldiring</h1>
        <p class="offer-subtext">Tez orada siz bilan bog'lanamiz va barcha savollaringizga javob beramiz.</p>
        <InputMask id="basic" class="offer-input" v-model="phoneNumber" mask="+999-(99)-999-99-99"
            placeholder="+998-(99)-999-99-99" />
        <button class="user-hero-button" @click="onSendPhone">Raqamni qoldirish</button>
    </div>
</template>
<script setup lang="ts">

const phoneNumber = ref()
const toast = useToast()

function onSendPhone() {
    console.log(phoneNumber.value)
    if (!!phoneNumber.value) {
        toast.add({
            summary: "Raqamingiz yuborildi",
            detail: "Tez orada aloqaga chiqamiz",
            life: 3000,
            severity: "success"
        })
    } else {
        toast.add({
            summary: "Raqamingizni yozing",
            life: 3000,
            severity: "error"
        })
    }
}
</script>