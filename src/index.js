const content = document.getElementById("content");

let Tabs = 0;

/* Tab buttons */
function CreateTabButton(name) {
    const elem = document.createElement("button");
    elem.className = "tabButton";
    elem.innerText = name;

    Tabs++;
    const tab_index = Tabs - 1;
    elem.addEventListener("click", () => {
        console.log(tab_index);
    });

    return elem;
}

content.appendChild(CreateTabButton("Home"));
content.appendChild(CreateTabButton("Menu"));
content.appendChild(CreateTabButton("Contact"));