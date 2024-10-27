let genAppearance;
let colorTheme;

document.getElementById('next-btn-3')?.addEventListener('click', function() {
    if (document.getElementById('generalAppearance') != null) {
        genAppearance = document.getElementById('generalAppearance');
    } else {
        genAppearance = "a steriotypical looking super hero"
    }
    
    console.log(genAppearance);
});

document.getElementById('next-btn-4')?.addEventListener('click', function() {
    if (document.getElementById('colorTheme') != null) {
        colorTheme = document.getElementById('colorTheme');
    } else {
        colorTheme = "no specific color theme"
    }
    
    console.log(colorTheme);
});



