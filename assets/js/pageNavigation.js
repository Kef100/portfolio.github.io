const URL = window.location.href;
var splitUrl = URL.split("/");
var pageAnchor = splitUrl[3];
console.log(pageAnchor);
// var splitAnchor = pageAnchor.split("#");
// var page = splitAnchor[0];

// const sections = document.querySelectorAll("section");

// const options = {
//     threshold: 0.4
// }

// let observer = new IntersectionObserver(sectionChecker, options);

// function sectionChecker(entries){
//     var counter = document.querySelector(".counter");
//     var pages = counter.innerHTML;
//     var split = pages.split("/");
//     var max = split[1];

//     entries.forEach(entry => {
//         const className = entry.target.className; 
//         const active = document.querySelector(`[data-page=${className}]`);
//         const index = entry.target.getAttribute("data-index");
//         const coords = active.getBoundingClientRect();
//         const directions = {
//             height: coords.height,
//             width: coords.width,
//             top: coords.top,
//             left: coords.left
//         };
//         if(entry.isIntersecting){
//             counter.innerHTML = index + "/" + max;
//         }
//     })
// }

// sections.forEach(section => {
//     observer.observe(section);
// });

// // 1/5 , 2/5 , 3/5 , 4/5, 5/5
// $("#pageDown").on("click", function() {
//     var counter = document.querySelector(".counter");
//     var pages = counter.innerHTML;
//     var split = pages.split("/");
//     var number = split[0];
//     var max = split[1];

//     if(number >= max){
//         number = 1;
//         counter.innerHTML = number + "/" + max;
//         window.location.href = "./" + page + "#1";
//     }
//     else
//     {
//         number++;
//         counter.innerHTML = number + "/" + max;
//         window.location.href = "./"+ page + "#" + number;
//     }    
// });

// // 5/5, 4/5, 3/5, 2/5, 1/5
// $("#pageUp").on("click", function() {
//     var counter = document.querySelector(".counter");
//     var pages = counter.innerHTML;
//     var split = pages.split("/");
//     var number = split[0];
//     var max = split[1];

//     if(number <=  1) {
//         number = max;
//         counter .innerHTML = number + "/" + max;
//         window.location.href = "./" + page + "#" + number;
//     }
//     else
//     {
//         number--;
//         counter.innerHTML = number + "/" + max;
//         window.location.href = "./" + page + "#" + number;
//     }
// });