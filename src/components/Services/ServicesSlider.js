document.addEventListener('DOMContentLoaded', () => {
  const baseOpts = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: { el: '.swiper-pagination', clickable: true },
  };

  document.querySelectorAll('.servicesSwiper').forEach(el => {
    if (el.swiper) return;
    const section = el.closest('.services-section');
    const nav = section ? section.querySelector('.services-section__nav') : null;
    const nextEl = nav ? nav.querySelector('.services-section__arrow--next') : null;
    const prevEl = nav ? nav.querySelector('.services-section__arrow--prev') : null;

    const options = {
      ...baseOpts,
    };

    if (nextEl && prevEl) {
      options.navigation = { nextEl, prevEl };
    } else {
      options.navigation = false;
    }

    new Swiper(el, options);
  });
});