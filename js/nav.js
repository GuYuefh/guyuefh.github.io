function updateNavbarState() {
  const header = document.getElementById('page-header');
  const nav = document.getElementById('nav');
  const menus = document.querySelector('#nav .menus_items');

  const isPostPage = document.querySelector('.post-content') !== null;
  const articleTitle = document.querySelector('.post-title');

  let navPostTitle = document.querySelector('.nav-post-title');
  if (!navPostTitle) {
    navPostTitle = document.createElement('span');
    navPostTitle.className = 'nav-post-title';
    nav.appendChild(navPostTitle);
  }

  if (isPostPage && articleTitle) {
    navPostTitle.innerText = articleTitle.innerText.trim();
  }

  // 非文章页：始终显示菜单，隐藏文章标题
  if (!isPostPage) {
    header.classList.remove('nav-visible');
    menus.style.pointerEvents = 'auto';
    return;
  }
}

// 滚动行为控制
window.addEventListener('scroll', () => {
  const header = document.getElementById('page-header');
  const isPostPage = document.querySelector('.post-content') !== null;

  if (!isPostPage) {
    header.classList.remove('nav-visible');
    return;
  }
//下滑触发高度
  if (window.scrollY > 150) {
    header.classList.add('nav-visible');
  } else {
    header.classList.remove('nav-visible');
  }
});

// 点击文章标题返回顶部
function bindNavPostTitleClick() {
  const navPostTitle = document.querySelector('.nav-post-title');
  if (!navPostTitle) return;

  navPostTitle.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 初次加载
updateNavbarState();
bindNavPostTitleClick();

// PJAX 切换后
document.addEventListener('pjax:complete', function () {
  updateNavbarState();
  bindNavPostTitleClick();
});
