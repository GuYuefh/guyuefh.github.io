function updateNavTitleOnScroll() {
  const navTitle = document.getElementById('nav-title');
  if (!navTitle) return;

  // 尝试获取文章标题
  let postTitleElem = document.querySelector('h1.post-title') || document.querySelector('h1'); 
  if (!postTitleElem) return; // 非文章页不执行

  const postTitle = postTitleElem.textContent;
  const blogTitle = navTitle.dataset.blogTitle || navTitle.textContent;

  // 保存博客原始名称到 data 属性，避免重复读取
  if (!navTitle.dataset.blogTitle) {
    navTitle.dataset.blogTitle = blogTitle;
  }

  const toggleTitle = () => {
    if(window.scrollY > 100){
      navTitle.textContent = postTitle;
    } else {
      navTitle.textContent = navTitle.dataset.blogTitle;
    }
  }

  toggleTitle();
  window.addEventListener('scroll', toggleTitle);
}

// DOM 加载 + PJAX 页面切换
document.addEventListener('DOMContentLoaded', updateNavTitleOnScroll);
document.addEventListener('pjax:complete', updateNavTitleOnScroll);
