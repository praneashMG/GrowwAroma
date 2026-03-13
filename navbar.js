/* ===============================
   DARK MODE - FIXED FOR PERSISTENCE ACROSS PAGES
   =============================== */

// This self-executing function runs BEFORE the page renders
(function() {
  try {
    let theme = localStorage.getItem('theme');
    
    if (theme !== 'dark' && theme !== 'light') {
      theme = 'light';
      localStorage.setItem('theme', 'light');
    }
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
})();

// Main DOM Content Loaded event
document.addEventListener("DOMContentLoaded", () => {
  
  /* ===============================
     APPLY GLOBAL BODY THEME (Whole Page Change)
     =============================== */
  // This ensures the entire webpage background and text change smoothly
  document.body.classList.add(
    'bg-[#FCF8F8]', // Light mode body background (very soft cream/white)
    'dark:bg-[#121212]', // Dark mode body background (deep charcoal)
    'text-[#1A1A1A]', // Light mode text
    'dark:text-[#FFFFFF]', // Dark mode text
    'transition-colors', 
    'duration-500' // Smooth fade effect for the whole page
  );

  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<nav class="fixed top-0 left-0 w-full z-50 bg-[#E8B4B8] dark:bg-[#1A1A1A] shadow-md transition-colors duration-500">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">

      <a href="index.html" class="flex items-center space-x-2 rtl:space-x-reverse">
        <span class="text-[#1A1A1A] dark:text-[#FFFFFF] text-xl font-serif font-bold tracking-wide transition-colors duration-500">
          Groww<span class="text-[#7A1E2C] dark:text-[#7A1E2C]">Aroma</span>
        </span>
      </a>

      <div class="hidden xl:flex flex-1 justify-center space-x-6 rtl:space-x-reverse items-center font-medium">
        <div class="relative">
          <button id="homeBtn" class="flex items-center space-x-1 text-[#1A1A1A] dark:text-[#FFFFFF] px-3 py-2 rounded-lg hover:text-[#7A1E2C] dark:hover:text-[#7A1E2C] transition-colors">
            Home <i class="fas fa-chevron-down text-xs ml-1"></i>
          </button>
          <div id="homeMenu" class="hidden absolute mt-2 w-48 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 transition-colors duration-300">
            <a href="index.html" class="home-link block px-4 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:bg-[#E8B4B8]/20 dark:hover:bg-gray-800 hover:text-[#7A1E2C]">Home1</a>
            <a href="home2.html" class="home-link block px-4 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:bg-[#E8B4B8]/20 dark:hover:bg-gray-800 hover:text-[#7A1E2C]">Home2</a>
          </div>
        </div>
        <a href="about.html" class="nav-link px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors">About</a>
        <a href="blog.html" class="nav-link px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors">Blog</a>

        <a href="shop.html" class="nav-link px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors">Shop</a>
                <a href="collections.html" class="nav-link px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors">Collections</a>

        <a href="contact.html" class="nav-link px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors">Contact</a>

        <div class="relative">
          <button id="dashBtn" class="flex items-center space-x-1 px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors">
            Dashboards <i class="fas fa-chevron-down text-xs ml-1"></i>
          </button>
          <div id="dashMenu" class="hidden absolute mt-2 w-48 bg-[#FFFFFF] dark:bg-[#1A1A1A] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 transition-colors duration-300">
            <a href="user.html" class="block px-4 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:bg-[#E8B4B8]/20 dark:hover:bg-gray-800 hover:text-[#7A1E2C]">User</a>
            <a href="admin.html" class="block px-4 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:bg-[#E8B4B8]/20 dark:hover:bg-gray-800 hover:text-[#7A1E2C]">Admin</a>
          </div>
        </div>
      </div>

      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        
        <button id="rtlToggle" class="hidden xl:block text-sm font-semibold px-3 py-1 bg-[#FFFFFF] dark:bg-[#2A2A2A] text-[#1A1A1A] dark:text-[#7A1E2C] rounded border border-transparent dark:border-[#7A1E2C]/50 hover:border-[#7A1E2C] transition-all duration-300">
          RTL
        </button>

        <button id="darkToggle" class="hidden xl:flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF] dark:bg-[#2A2A2A] hover:bg-[#FDE8E9] dark:hover:bg-gray-700 transition-all duration-300 overflow-hidden shadow-sm">
          <i id="darkIcon" class="fas fa-moon text-xl text-[#7A1E2C] transition-all duration-500 transform"></i>
        </button>
        
        <a href="login.html" class="hidden xl:block px-5 py-2 bg-[#7A1E2C] hover:bg-[#5A1620] text-[#FFFFFF] font-medium rounded-lg transition-colors shadow-sm">
          Login
        </a>

        <a href="signup.html" class="hidden xl:block px-5 py-2 bg-[#FFFFFF] dark:bg-transparent dark:border dark:border-[#7A1E2C] hover:bg-[#7A1E2C] dark:hover:bg-[#7A1E2C] text-[#1A1A1A] dark:text-[#7A1E2C] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] font-medium rounded-lg transition-colors shadow-sm">
          Sign Up
        </a>

        <button id="mobileBtn" class="xl:hidden text-2xl text-[#1A1A1A] dark:text-[#7A1E2C] transition-colors">
          <i id="mobileIcon" class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <div id="mobileMenu" class="xl:hidden hidden flex flex-col space-y-2 py-4 border-t border-[#FFFFFF]/30 dark:border-gray-700">
      
      <div class="relative">
        <button id="mobileHomeBtn" class="w-full flex items-center justify-between px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors font-medium">
          <span>Home</span>
          <i id="mobileHomeIcon" class="fas fa-chevron-down text-xs transition-transform duration-300"></i>
        </button>
        <div id="mobileHomeMenu" class="hidden mt-1 ml-4 w-full rounded-lg py-2 border-l-2 border-[#7A1E2C]">
          <a href="index.html" class="home-link block px-4 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] rounded transition-colors">Home1</a>
          <a href="home2.html" class="home-link block px-4 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] rounded transition-colors">Home2</a>
        </div>
      </div>
      <a href="about.html" class="px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors font-medium">About</a>
      <a href="blog.html" class="px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors font-medium">Blog</a>

      <a href="shop.html" class="px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors font-medium">Shop</a>
            <a href="collections.html" class="px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors font-medium">Collections</a>

            <a href="contact.html" class="px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors font-medium">Contact</a>

      <div class="relative">
        <button id="mobileDashBtn" class="w-full flex items-center justify-between px-3 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] transition-colors font-medium">
          <span>Dashboards</span>
          <i id="mobileDashIcon" class="fas fa-chevron-down text-xs transition-transform duration-300"></i>
        </button>
        <div id="mobileDashMenu" class="hidden mt-1 ml-4 w-full rounded-lg py-2 border-l-2 border-[#7A1E2C]">
          <a href="user.html" class="block px-4 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] rounded transition-colors">User</a>
          <a href="admin.html" class="block px-4 py-2 text-[#1A1A1A] dark:text-[#FFFFFF] hover:text-[#7A1E2C] rounded transition-colors">Admin</a>
        </div>
      </div>

      <div class="flex flex-col space-y-3 pt-4 border-t border-[#FFFFFF]/30 dark:border-gray-700">
        <a href="login.html" class="px-4 py-2 bg-[#7A1E2C] hover:bg-[#5A1620] text-[#FFFFFF] font-medium rounded-lg text-center transition-colors shadow-sm">
          Login
        </a>
        <a href="signup.html" class="px-4 py-2 bg-[#FFFFFF] dark:bg-transparent dark:border dark:border-[#7A1E2C] text-[#1A1A1A] dark:text-[#7A1E2C] hover:bg-[#7A1E2C] dark:hover:bg-[#7A1E2C] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] font-medium rounded-lg text-center transition-all shadow-sm">
          Sign Up
        </a>
        
        <div class="flex space-x-2 mt-4">
          <button id="mobileRtlToggle" class="flex-1 text-sm font-semibold px-3 py-2 bg-[#FFFFFF] dark:bg-[#2A2A2A] text-[#1A1A1A] dark:text-[#7A1E2C] rounded hover:border-[#7A1E2C] transition-colors border border-transparent dark:border-[#7A1E2C]/50">
            RTL
          </button>
          <button id="mobileDarkToggle" class="flex-1 flex justify-center items-center text-sm font-semibold px-3 py-2 bg-[#FFFFFF] dark:bg-[#2A2A2A] text-[#1A1A1A] dark:text-[#7A1E2C] rounded hover:border-[#7A1E2C] transition-colors border border-transparent dark:border-[#7A1E2C]/50">
            <i id="mobileDarkIcon" class="fas fa-moon mr-2 transition-all duration-500 transform"></i> Theme
          </button>
        </div>
      </div>
    </div>

  </div>
</nav>
`;

  /* ===============================
     ANIMATED DARK MODE TOGGLE
  =============================== */
  const darkToggle = document.getElementById("darkToggle");
  const mobileDarkToggle = document.getElementById("mobileDarkToggle");
  const darkIcon = document.getElementById("darkIcon");
  const mobileDarkIcon = document.getElementById("mobileDarkIcon");

  function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    
    // Desktop Icon Animation (Rotates 360deg and swaps icon)
    if (darkIcon) {
      if (isDark) {
        darkIcon.className = 'fas fa-sun text-xl text-[#FBBF24] transition-all duration-500 transform rotate-180 scale-110';
      } else {
        darkIcon.className = 'fas fa-moon text-xl text-[#7A1E2C] transition-all duration-500 transform rotate-0 scale-100';
      }
    }
    
    // Mobile Icon Animation
    if (mobileDarkIcon) {
      if (isDark) {
        mobileDarkIcon.className = 'fas fa-sun mr-2 text-[#FBBF24] transition-all duration-500 transform rotate-180';
      } else {
        mobileDarkIcon.className = 'fas fa-moon mr-2 text-[#7A1E2C] transition-all duration-500 transform rotate-0';
      }
    }
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
  }

  // Set initial icons based on current theme
  updateThemeIcons();

  if (darkToggle) darkToggle.addEventListener('click', toggleTheme);
  if (mobileDarkToggle) mobileDarkToggle.addEventListener('click', toggleTheme);

  /* ===============================
     RTL MODE
  =============================== */
  const rtlToggle = document.getElementById("rtlToggle");
  const mobileRtlToggle = document.getElementById("mobileRtlToggle");

  function toggleRTL() {
    document.documentElement.dir = document.documentElement.dir === "rtl" ? "ltr" : "rtl";
  }

  if (rtlToggle) rtlToggle.addEventListener("click", toggleRTL);
  if (mobileRtlToggle) mobileRtlToggle.addEventListener("click", toggleRTL);

  /* ===============================
     DROPDOWNS & MOBILE MENU
  =============================== */
  const homeBtn = document.getElementById("homeBtn");
  const homeMenu = document.getElementById("homeMenu");
  const dashBtn = document.getElementById("dashBtn");
  const dashMenu = document.getElementById("dashMenu");

  function closeAllDropdowns() {
    if (homeMenu) homeMenu.classList.add('hidden');
    if (dashMenu) dashMenu.classList.add('hidden');
    if (mobileHomeMenu) mobileHomeMenu.classList.add('hidden');
    if (mobileDashMenu) mobileDashMenu.classList.add('hidden');
    if (mobileHomeIcon) mobileHomeIcon.className = 'fas fa-chevron-down text-xs ml-1 transition-transform duration-300';
    if (mobileDashIcon) mobileDashIcon.className = 'fas fa-chevron-down text-xs ml-1 transition-transform duration-300';
  }

  if (homeBtn && homeMenu) {
    homeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = homeMenu.classList.contains('hidden');
      closeAllDropdowns();
      if (isHidden) homeMenu.classList.remove('hidden');
    });
  }

  if (dashBtn && dashMenu) {
    dashBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = dashMenu.classList.contains('hidden');
      closeAllDropdowns();
      if (isHidden) dashMenu.classList.remove('hidden');
    });
  }

  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const mobileHomeMenu = document.getElementById("mobileHomeMenu");
  const mobileHomeIcon = document.getElementById("mobileHomeIcon");
  const mobileDashBtn = document.getElementById("mobileDashBtn");
  const mobileDashMenu = document.getElementById("mobileDashMenu");
  const mobileDashIcon = document.getElementById("mobileDashIcon");

  if (mobileHomeBtn && mobileHomeMenu) {
    mobileHomeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileHomeMenu.classList.contains('hidden');
      if (mobileDashMenu) mobileDashMenu.classList.add('hidden');
      if (mobileDashIcon) mobileDashIcon.className = 'fas fa-chevron-down text-xs transition-transform duration-300';
      
      mobileHomeMenu.classList.toggle('hidden');
      mobileHomeIcon.className = isHidden ? 'fas fa-chevron-up text-xs transition-transform duration-300 rotate-180' : 'fas fa-chevron-down text-xs transition-transform duration-300';
    });
  }

  if (mobileDashBtn && mobileDashMenu) {
    mobileDashBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileDashMenu.classList.contains('hidden');
      if (mobileHomeMenu) mobileHomeMenu.classList.add('hidden');
      if (mobileHomeIcon) mobileHomeIcon.className = 'fas fa-chevron-down text-xs transition-transform duration-300';
      
      mobileDashMenu.classList.toggle('hidden');
      mobileDashIcon.className = isHidden ? 'fas fa-chevron-up text-xs transition-transform duration-300 rotate-180' : 'fas fa-chevron-down text-xs transition-transform duration-300';
    });
  }

  const mobileBtn = document.getElementById("mobileBtn");
  const mobileIcon = document.getElementById("mobileIcon");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileBtn && mobileIcon && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      mobileIcon.className = isHidden ? 'fas fa-times transform rotate-90 transition-all duration-300' : 'fas fa-bars transform rotate-0 transition-all duration-300';
      
      if (!isHidden) {
        if (mobileHomeMenu) mobileHomeMenu.classList.add('hidden');
        if (mobileDashMenu) mobileDashMenu.classList.add('hidden');
        if (mobileHomeIcon) mobileHomeIcon.className = 'fas fa-chevron-down text-xs transition-transform duration-300';
        if (mobileDashIcon) mobileDashIcon.className = 'fas fa-chevron-down text-xs transition-transform duration-300';
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileIcon.className = 'fas fa-bars transition-all duration-300';
      });
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.relative') && !e.target.closest('#mobileBtn') && 
        !e.target.closest('#mobileHomeBtn') && !e.target.closest('#mobileDashBtn')) {
      closeAllDropdowns();
    }
    
    if (mobileMenu && !mobileMenu.contains(e.target) && !mobileBtn?.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      if (mobileIcon) mobileIcon.className = 'fas fa-bars transition-all duration-300';
    }
  });

  /* ===============================
     ACTIVE LINK HIGHLIGHT
  =============================== */
  const currentPage = window.location.pathname.split("/").pop() || 'index.html';
  const homePages = ['', 'index.html', 'new-arrivals.html'];
  const isHomePage = homePages.includes(currentPage);

  document.querySelectorAll('.nav-link, .home-link, #homeBtn, #mobileHomeBtn, #dashBtn, #mobileDashBtn')
    .forEach(el => el?.classList.remove('font-bold', 'text-[#7A1E2C]'));

  if (isHomePage) {
    if (homeBtn) homeBtn.classList.add('font-bold');
    if (mobileHomeBtn) mobileHomeBtn.classList.add('font-bold');
  }

  document.querySelectorAll('.home-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('font-bold', 'text-[#7A1E2C]');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('font-bold', 'text-[#7A1E2C]');
    }
  });
});