document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="w-full bg-[#E8B4B8] dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-[#FFFFFF] transition-colors duration-500 border-t border-[#7A1E2C]/20 dark:border-gray-800">
  <div class="max-w-7xl mx-auto mt-10 px-4 py-14 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

    <div class="lg:col-span-1">
      <a href="index.html" class="flex items-center space-x-2 rtl:space-x-reverse">
        <span class="text-xl font-serif font-bold tracking-wide text-[#1A1A1A] dark:text-[#FFFFFF] transition-colors duration-500">
          Fragora<span class="text-[#7A1E2C]">Aroma</span>
        </span>
      </a>
      <p class="mt-4 text-sm text-[#1A1A1A]/80 dark:text-[#FFFFFF]/70 leading-relaxed">
        Discover your signature scent with our curated collection of luxury, designer, and niche fragrances.
      </p>

      <div class="mt-6 flex gap-3">
        <a href="#" class="w-9 h-9 flex justify-center items-center rounded-lg bg-[#FFFFFF] dark:bg-[#2A2A2A] hover:bg-[#7A1E2C] dark:hover:bg-[#7A1E2C] text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors shadow-sm">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="w-9 h-9 flex justify-center items-center rounded-lg bg-[#FFFFFF] dark:bg-[#2A2A2A] hover:bg-[#7A1E2C] dark:hover:bg-[#7A1E2C] text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors shadow-sm">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="w-9 h-9 flex justify-center items-center rounded-lg bg-[#FFFFFF] dark:bg-[#2A2A2A] hover:bg-[#7A1E2C] dark:hover:bg-[#7A1E2C] text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors shadow-sm">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-serif font-semibold text-[#7A1E2C] mb-4">Category</h3>
      <ul class="space-y-3 text-sm text-[#1A1A1A]/80 dark:text-[#FFFFFF]/70">
        <li class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors cursor-pointer">Women's Perfume</li>
        <li class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors cursor-pointer">Men's Cologne</li>
        <li class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors cursor-pointer">Unisex Fragrances</li>
        <li class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors cursor-pointer">Exclusive Gift Sets</li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-serif font-semibold text-[#7A1E2C] mb-4">Quick Links</h3>
      <ul class="space-y-3 text-sm text-[#1A1A1A]/80 dark:text-[#FFFFFF]/70">
        <li><a href="index.html" class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors">Home</a></li>
        <li><a href="about.html" class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors">About</a></li>
        <li><a href="shop.html" class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors">Shop</a></li>
        <li><a href="contact.html" class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors">Contact Us</a></li>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-serif font-semibold text-[#7A1E2C] mb-4">Customer Care</h3>
      <ul class="space-y-3 text-sm text-[#1A1A1A]/80 dark:text-[#FFFFFF]/70">
        <li class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors cursor-pointer">Track Order</li>
        <li class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors cursor-pointer">Shipping & Delivery</li>
        <li class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors cursor-pointer">Returns & Exchanges</li>
        <li class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors cursor-pointer">FAQ</li>
      </ul>
    </div>

    <div class="lg:col-span-1">
      <h3 class="text-lg font-serif font-semibold text-[#7A1E2C] mb-4">Join The Scent Club</h3>
      <p class="text-sm text-[#1A1A1A]/80 dark:text-[#FFFFFF]/70 mb-4 leading-relaxed">
        Subscribe for exclusive offers, new arrival alerts, and expert fragrance tips.
      </p>

      <form class="flex flex-col gap-3">
        <input type="email"
          placeholder="Enter your email"
          required
          class="w-full px-4 py-2.5 rounded-lg bg-[#FFFFFF] dark:bg-[#2A2A2A] border border-transparent dark:border-gray-700
                 text-[#1A1A1A] dark:text-[#FFFFFF] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A1E2C] transition-colors shadow-sm">
        <button
          type="submit"
          class="px-4 py-2.5 rounded-lg bg-[#7A1E2C] hover:bg-[#5A1620] text-[#FFFFFF] font-medium transition-colors shadow-sm">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div class="border-t border-[#7A1E2C]/20 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-[#1A1A1A]/80 dark:text-[#FFFFFF]/70">
      
      <p>© ${new Date().getFullYear()} GrowwAroma Fragrances. All rights reserved.</p>

      <div class="flex gap-6">
        <a href="#" class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors cursor-pointer">Privacy Policy</a>
        <a href="#" class="hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors cursor-pointer">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

  // Add event listeners for newsletter form
  const newsletterForm = footer.querySelector('form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput.value) {
        // You can replace this alert with a nice toast notification later!
        alert('Welcome to the Scent Club! Thank you for subscribing.');
        emailInput.value = '';
      }
    });
  }

  // Add hover effects and tracking for list items (optional functionality)
  const listItems = footer.querySelectorAll('li[class*="hover"]');
  listItems.forEach(item => {
    item.addEventListener('click', () => {
      // Add your actual navigation or filtering logic here
      console.log('Navigating to category/page:', item.textContent.trim());
    });
  });
});