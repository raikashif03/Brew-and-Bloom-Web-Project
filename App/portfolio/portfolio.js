const grid = document.getElementById('mainGalleryGrid');
const btn4 = document.getElementById('btn-col-4');
const btn2 = document.getElementById('btn-col-2');
const btn1 = document.getElementById('btn-col-1');
const modeButtons = [btn4, btn2, btn1];

function setGridMode(modeClass, activeBtn) {
    if (!grid || !activeBtn) return;
    grid.classList.remove('force-col-4', 'force-col-2', 'force-col-1');
    grid.classList.add(modeClass);
    modeButtons.forEach(function (btn) {
        if (btn) btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

if (btn4) {
    btn4.addEventListener('click', function () {
        setGridMode('force-col-4', btn4);
    });
}

if (btn2) {
    btn2.addEventListener('click', function () {
        setGridMode('force-col-2', btn2);
    });
}

if (btn1) {
    btn1.addEventListener('click', function () {
        setGridMode('force-col-1', btn1);
    });
}
