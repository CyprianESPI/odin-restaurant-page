const content = document.getElementById("content");

function updateMainContent(tab_index) {
    // Remove previous content
    while (main.firstChild) {
        main.firstChild.remove()
    }

    const title = document.createElement("h2");
    const info_container = document.createElement("div");

    switch (tab_index) {
        case 0:
            title.innerText = "Home";
            const greeting = document.createElement("p");
            greeting.innerText = "Welcome!";
            info_container.appendChild(greeting);
            break;
        case 1:
            title.innerText = "Menu";
            const food = document.createElement("p");
            food.innerText = "Burger";
            info_container.appendChild(food);
            break;
        case 2:
            title.innerText = "Contact";
            const phone_number = document.createElement("p");
            phone_number.innerText = "Phone: 123 456 789";
            info_container.appendChild(phone_number);
            break;
        default:
            console.log("Unhandled tab_index", tab_index);
            break;
    }

    main.appendChild(title);
    main.appendChild(info_container);
}

/* Header */
const header = document.createElement("h1");
header.innerText = "Restaurant Page";
content.appendChild(header);

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
        updateMainContent(tab_index);
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

/* Footer */
const footer = document.createElement("h2");
const footer_link = document.createElement("a");
footer_link.href = "https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page";
footer_link.innerText = "The Odin Project | Project: Restaurant Page";
footer.appendChild(footer_link);
content.appendChild(footer);

/* Select Home tab */
updateMainContent(0);