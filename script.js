document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("infi-list");

    // Function to add list items
    function addItems(count) {
        for (let i = 0; i < count; i++) {
            let li = document.createElement("li");
            li.textContent = "Item " + (list.children.length + 1);
            list.appendChild(li);
        }
    }

    // Add 10 items initially
    addItems(10);

    // Check if user scrolled to bottom and add 2 more items
    list.addEventListener("scroll", function () {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            addItems(2);
        }
    });
});
