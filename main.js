let bar = document.getElementsByClassName('menu-bar')[0];

bar.addEventListener('click', () => {
    let leftMenu = document.getElementsByClassName('left-menu')[0];
    let menuFont = document.getElementsByClassName('menu-font')[0];
    let search = document.getElementsByClassName('search')[0];

    let tasks = document.querySelectorAll('.task');

    leftMenu.style.display = 'flex-basis(10%)';
    menuFont.style.display = 'none';
    search.style.display = 'none';
    tasks.style.display = 'none';
})