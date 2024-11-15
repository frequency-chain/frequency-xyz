let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver(observerOptions: IntersectionObserverInit) {
  if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
      entry.target.dispatchEvent(new CustomEvent(eventName));
    });
  }, observerOptions);
}

// Threshold defaults to 0. It requires n% of the element to be in the intersection to trigger (0.0-1.0)
export default function viewport(element: Element, observerOptions: IntersectionObserverInit = { threshold: 0 }) {
  ensureIntersectionObserver(observerOptions);

  intersectionObserver.observe(element);

  return {
    destroy() {
      intersectionObserver.unobserve(element);
    },
  };
}
