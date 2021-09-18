var myBlog = [
    { 
        title : "OUR AWESOME HOMES",
        text : "i hope you enjoy my new games PUBG.State for mobile.",
        image : "PUBG-NEW-STATE-Key-Art-2.jpg",
        link : "#"
    },
    { 
        title : "OUR AWESOME HOMES",
        text : "i hope you enjoy my new games PUBG.State for mobile.",
        image : "PUBG-NEW-STATE-Key-Art-2.jpg",
        link : "#"
    },
    { 
        title : "OUR AWESOME HOMES",
        text : "i hope you enjoy my new games PUBG.State for mobile.",
        image : "PUBG-NEW-STATE-Key-Art-2.jpg",
        link : "#"
    },
    { 
        title : "OUR AWESOME HOMES",
        text : "i hope you enjoy my new games PUBG.State for mobile.",
        image : "PUBG-NEW-STATE-Key-Art-2.jpg",
        link : "#"
    },
    { 
        title : "OUR AWESOME HOMES",
        text : "i hope you enjoy my new games PUBG.State for mobile.",
        image : "PUBG-NEW-STATE-Key-Art-2.jpg",
        link : "#"
    },
    { 
        title : "OUR AWESOME HOMES",
        text : "i hope you enjoy my new games PUBG.State for mobile.",
        image : "PUBG-NEW-STATE-Key-Art-2.jpg",
        link : "#"
    },
];

var blog = document.getElementById("my-list-blog");
var innerHtml = "";
    for (let i = 0; i < myBlog.length; i++) {
        let data = myBlog[i];
        innerHtml += `
        <li>
        <div class="list-div">
            <a href="${data.image}"><img src="${data.image}" alt="Wallpaper4K!"/></a>
        </div>
        <h2>${data.title}</h2>
        <p>${data.text}</p>
        <div class="list-buttom">
            <a href="${data.link}">View More</a>
        </div>
    </li>`;
    }

blog.innerHTML = innerHtml;