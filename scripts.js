const toggleSwitch = document.querySelector('.onoffswitch-checkbox');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'light');
    }
    else {
        document.documentElement.setAttribute('theme', 'dark');
    }    
    adjustLinks(e);
}

toggleSwitch.addEventListener('change', switchTheme, false);

function adjustLinks(e){
    link1 = document.querySelector(".link1");
    link2 = document.querySelector(".link2");
    if (e.target.checked){
        link1.text = "code";
        link1.href = "https://github.com/taanguyen";
        link2.text = "blog";
        link2.href = "https://taanguyen.github.io/blog/";
    }    
    else{
        link1.text = "read";
        link1.href = "#";
        link2.text = "compose music";
        link2.href = "https://photos.app.goo.gl/Ge4fNPhMKC8KRBY48";
    }
}