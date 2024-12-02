<template>
    <div class="user-hero-container">
        <h1 class="user-hero-title">Siz orzu qilgan mebel san’ati</h1>
        <p class="user-hero-subtitle">Bizning mebel kolleksiyamiz sizning orzularingizni amalga oshiradi. Har bir detal
            — bu yuqori sifat, zamonaviy dizayn va qulaylikni birlashtirgan noyob asar.</p>
        <button class="user-hero-button">Buyurtma qilish</button>
    </div>
    <div class="user-products-container">
        <div class="user-products-text">
            <h1 class="user-products-title">Precision & Elegance, Since 2010.</h1>
            <p class="user-products-subtitle">Reinvent your living space with William Wood, the undisputed home of
                Premium Statement Mirrors, Occasional Furniture, and Accessories. Discover the best designs in the
                market with a clear focus on clean and sophisticated aesthetics.</p>
        </div>

        <AppProductList />
    </div>
    <div class="features">
        <div class="feature">
            <i class="pi pi-shield"></i>
            <p>600,000+ mijozlar William Wood brendini tanladilar</p>
        </div>
        <div class="feature">
            <i class="pi pi-credit-card"></i>
            <p>3-12 oy davomida to'lovni qo'shimcha xarajatsiz amalga oshiring</p>
        </div>
        <div class="feature">
            <i class="pi pi-clock"></i>
            <p>90 kun ichida qaytarish va tezkor qaytish jarayoni</p>
        </div>
        <div class="feature">
            <i class="pi pi-truck"></i>
            <p>Buyuk Britaniya va Shimoliy Irlandiyaga bepul yetkazib berish</p>
        </div>
    </div>
    <ExclusiveOffer/>
    <AppFooter/>
    <Toast/>
</template>
<style src="~/assets/stylus/pages/index.styl"></style>