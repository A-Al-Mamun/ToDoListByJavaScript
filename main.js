let bar = document.getElementsByClassName('menu-bar')[0];

bar.addEventListener('click', () => {
    let leftMenu = document.getElementsByClassName('left-menu')[0];
    let menuFont = document.getElementsByClassName('menu-font')[0];
    let search = document.getElementsByClassName('search')[0];

    let task0 = document.getElementsByClassName('task')[0];
    let task1 = document.getElementsByClassName('task')[1];

    if(task0.style.display == 'none'){
        leftMenu.style.display = 'flexBasis: 10%';
        menuFont.style.display = 'block';
        search.style.display = 'block';
        task0.style.display = 'flex';
        task1.style.display = 'flex';
    }else{
        leftMenu.style.width = '10%'
        menuFont.style.display = 'none';
        search.style.display = 'none';
        task0.style.display = 'none';
        task1.style.display = 'none';
    }
})