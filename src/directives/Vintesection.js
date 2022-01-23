export default {
  mounted(el, binding) {
      const options = {
        rootMargin: '0px',
        threshold: 1.0
      }
      const callback = (entries) => {
        if (entries[0].isIntersecting) {
          console.log(binding.value());
        }
        // console.log(observer);
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(el);
  },
  name: 'intersection'
}