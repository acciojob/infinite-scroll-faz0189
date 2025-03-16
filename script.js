document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("infinite-list");
    let itemCount = 10;

    // Function to add items
    function addItems(count) {
        for (let i = 0; i < count; i++) {
            let li = document.createElement("li");
            li.textContent = "Item " + (list.children.length + 1);
            list.appendChild(li);
        }
    }

    // Add initial 10 items
    addItems(itemCount);

    // Add 2 items when scrolled to bottom
    window.addEventListener("scroll", function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            addItems(2);
        }
    });
});

