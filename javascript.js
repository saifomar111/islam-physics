const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");

const cards = document.querySelectorAll(".cosmos-card");


searchInput.addEventListener("input", function () {

    const text = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = "";

    if (text === "") {
        return;
    }


    cards.forEach(function (card) {

        const title = card.querySelector("h3").textContent;
        const link = card.querySelector("a").href;

        const titleLower = title.toLowerCase();


        if (titleLower.includes(text)) {

            const result = document.createElement("div");

            result.className = "search-result";

            result.textContent = title;


            result.addEventListener("click", function () {

                window.location.href = link;

            });


            searchResults.appendChild(result);

        }

    });


    if (searchResults.innerHTML === "") {

        searchResults.innerHTML =
            '<div class="no-result">هیچ بابەتێک نەدۆزرایەوە</div>';

    }

});


searchBtn.addEventListener("click", function () {

    const text = searchInput.value.trim().toLowerCase();


    cards.forEach(function (card) {

        const title = card.querySelector("h3").textContent;
        const link = card.querySelector("a").href;


        if (title.toLowerCase().includes(text)) {

            window.location.href = link;

        }

    });

});