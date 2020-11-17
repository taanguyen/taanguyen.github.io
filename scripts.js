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
        link1.innerHTML = "code";
        link1.setAttribute("href") = "https://github.com/taanguyen";
        link2.innerHTML = "blog";
        link2.setAttribute("href") = "https://taanguyen.github.io/blog/";
    }    
    else{
        link1.innerHTML = "read";
        link1.setAttribute("href") = "#";
        link2.innerHTML = "compose music";
        link2.setAttribute("href") = "https://photos.app.goo.gl/Ge4fNPhMKC8KRBY48";
    }
}