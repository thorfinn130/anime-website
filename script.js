const media = document.getElementById("media");
const playButton = document.getElementById("media-button");
const queryButton = document.getElementById("query-button");
const queryContainer = document.getElementById("query-container");

playButton.addEventListener("click", function () {
    media.src = "https://flixcloud.cc/e/vievo22zsv4w?v=2";
    playButton.style.display = "none";
});

queryButton.addEventListener("click", function () {
    queryContainer.hidden = !queryContainer.hidden;
    queryButton.setAttribute("aria-expanded", String(!queryContainer.hidden));
});

queryContainer.addEventListener("click", function (event) {
    const episodeButton = event.target.closest(".episode-option");

    if (!episodeButton) {
        return;
    }

    media.src = episodeButton.dataset.src;
    playButton.style.display = "none";
    queryContainer.hidden = true;
    queryButton.setAttribute("aria-expanded", "false");
});