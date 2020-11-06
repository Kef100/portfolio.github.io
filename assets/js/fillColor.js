const section = document.getElementById("about");

const options = {
    threshold: 0.5
}

let observer = new IntersectionObserver(sectionChecker, options);

function sectionChecker(entries){
    entries.forEach(entry => {
        if(entry.target.className == "about" || entry.target.className.includes("themeColorBefore"))
        {
            entry.target.classList.remove('themeColorAfter');
            entry.target.classList.add("themeColorBefore");
        }
        else
        {
            entry.target.classList.add("themeColorAfter");
            entry.target.classList.remove("themeColorBefore");
        }
       
    })
}

observer.observe(section);

