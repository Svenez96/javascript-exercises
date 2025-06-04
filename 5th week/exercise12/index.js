const list = document.createElement("ul");

const animali = ["cane", "gatto", "orso", "lupo", "cervo"];

animali.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
});

document.body.appendChild(list)