export const useScroll = () => {
  const y = ref(0);

  const onScroll = () => {
    y.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener("scroll", onScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });

  return { y };
};
