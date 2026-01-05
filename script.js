document.addEventListener('DOMContentLoaded', function() {
    console.log("厦大经院研伴 - 页面加载完成！");

    // 未来可以在这里添加更多的交互逻辑，例如：
    // - 实现搜索功能
    // - 动态加载数据（如果未来有后端）
    // - 轮播图、动画效果等

    // 示例：点击导航链接平滑滚动到对应区域 (如果导航链接是锚点)
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
