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

    // trigger about me animations every time info tab opens
    requestAnimationFrame(() => {
      const photo = document.getElementById('about-photo');
      const bio   = document.getElementById('about-bio');
      if (photo) photo.classList.add('animate');
      if (bio)   bio.classList.add('animate');
    });
  }
}

window.addEventListener('load', () => {
  switchTab('work');

  const loader      = document.getElementById('page-loader');
  const sectionWork = document.getElementById('section-work');
  const macWindow   = document.getElementById('mac-window');

  setTimeout(() => {
    loader.classList.add('hidden-loader');
    sectionWork.classList.remove('opacity-0');
    requestAnimationFrame(() => {
      if (macWindow) macWindow.classList.add('animate');
    });
  }, 1200);
});

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