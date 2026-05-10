function switchTab(tab) {
  const btnWork = document.getElementById('btn-work');
  const btnInfo = document.getElementById('btn-info');
  const pill = document.getElementById('sliding-pill');
  const sectionWork = document.getElementById('section-work');
  const sectionInfo = document.getElementById('section-info');

  const activeBtn = (tab === 'work') ? btnWork : btnInfo;
  const inactiveBtn = (tab === 'work') ? btnInfo : btnWork;

  // 1. Move and resize the sliding pill
  if (pill) {
    pill.style.width = activeBtn.offsetWidth + 'px';
    pill.style.transform = (tab === 'work') ? 'translateX(0)' : `translateX(${btnWork.offsetWidth + 2}px)`;
  }

  // 2. Update colors
  activeBtn.style.setProperty('color', 'rgb(255, 255, 255)', 'important');
  inactiveBtn.style.setProperty('color', 'rgba(255, 255, 255, 0.45)', 'important');

  // 3. Show / hide sections
  if (tab === 'work') {
    sectionWork.classList.remove('hidden');
    sectionInfo.classList.add('hidden');
  } else {
    sectionWork.classList.add('hidden');
    sectionInfo.classList.remove('hidden');
  }
}

window.addEventListener('load', () => switchTab('work'));

function toggleDropdown() {
  const d = document.getElementById('dropdown');
  d.classList.toggle('hidden');
  d.classList.toggle('flex');
}

document.addEventListener('click', function(e) {
  const wrap = document.querySelector('.relative.sm\\:hidden');
  if (wrap && !wrap.contains(e.target)) {
    const d = document.getElementById('dropdown');
    d.classList.add('hidden');
    d.classList.remove('flex');
  }
});

let isScrolling = false;
let scrollTimer = null;

function slowContinuousScroll() {
  if (isScrolling) return;
  isScrolling = true;

  const scrollAmount = 2;
  const scrollInterval = 20;
  const scrollDuration = 50000;
  const totalScrolls = scrollDuration / scrollInterval;
  let scrollCount = 0;

  scrollTimer = setInterval(() => {
    window.scrollBy(0, scrollAmount);
    scrollCount++;

    if (scrollCount >= totalScrolls) {
      clearInterval(scrollTimer);
      isScrolling = false;
      scrollTimer = null;
    }
  }, scrollInterval);
}

function stopScroll() {
  if (isScrolling && scrollTimer) {
    clearInterval(scrollTimer);
    isScrolling = false;
    scrollTimer = null;
  }
}

document.addEventListener('click', function(e) {
  if (!e.target.classList.contains('bouncingArrow')) {
    stopScroll();
  }
});

document.addEventListener('wheel', function() {
  stopScroll();
}, { passive: true });