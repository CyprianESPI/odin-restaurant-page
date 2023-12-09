const content = document.getElementById("content");

let TabIndex = 0;
let Tabs = 0;

/* Tab buttons */
function CreateTabButton(name) {
    const elem = document.createElement("button");
    elem.className = "tabButton";
    elem.innerText = name;

    Tabs++;
    const tab_index = Tabs - 1;
    elem.addEventListener("click", () => {
        console.log(tab_index, name);
        main.innerText = name;
    });

    return elem;
}

const tabs = document.createElement("div");
tabs.appendChild(CreateTabButton("Home"));
tabs.appendChild(CreateTabButton("Menu"));
tabs.appendChild(CreateTabButton("Contact"));
content.appendChild(tabs);

const main = document.createElement("main");
content.appendChild(main);

const footer = document.createElement("h2");
const footer_link = document.createElement("a");
footer_link.href = "https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page";
footer_link.innerText = "The Odin Project | Project: Restaurant Page";
footer.appendChild(footer_link);
content.appendChild(footer);