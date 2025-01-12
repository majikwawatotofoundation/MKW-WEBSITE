document.addEventListener('DOMContentLoaded', () => {
    // Create the Intersection Observer
    const countObserver = new IntersectionObserver((entries, countObserver) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.isIntersecting) {
          const counter = entry.target; // Link the entry directly to its target
          const speed = 200; // Adjust speed here
  
          const updateCount = () => {
            const target = +counter.getAttribute("data-target").replace(/,/g, ""); // Remove commas
            const count = +counter.innerText.replace(/,/g, ""); // Remove commas from current count
            const increment = target / speed;
  
            if (count < target) {
              counter.innerText = Math.ceil(count + increment).toLocaleString(); // Format with commas
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target.toLocaleString(); // Ensure final value has commas
            }
          };
  
          updateCount();
          countObserver.unobserve(entry.target); // Stop observing this counter
        }
      }
    });
  
    // Select all elements with a counter class
    const counters = document.querySelectorAll(".counter");
  
    // Observe each counter element using a for loop
    for (let i = 0; i < counters.length; i++) {
      countObserver.observe(counters[i]);
    }
  });