import { ref, onMounted, onUnmounted } from 'vue';

export function useIsMobile() {
    const isMobile = ref(false);

    const updateIsMobile = () => {
        isMobile.value = window.matchMedia('(max-width: 768px)').matches;
    };

    onMounted(() => {
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateIsMobile);
    });

    return { isMobile };
}
