const section = document.getElementById("about");

const options = {
    threshold: 0.5
}

let observer = new IntersectionObserver(sectionChecker, options);

function sectionChecker(entries){
    entries.forEach(entry => {
        if(entry.target.className == "about" || entry.target.className.includes("themeColorBefore"))
        {
            console.log("intersecting");
            entry.target.classList.add("themeColorAfter");
            entry.target.classList.remove("themeColorBefore");
        }
        else
        {
            console.log("not intersecting");
            entry.target.classList.remove('themeColorAfter');
            entry.target.classList.add("themeColorBefore");
        }
       
    })
}

observer.observe(section);

