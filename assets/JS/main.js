document.querySelector("#elastic").oninput = function () {
    let value = this.value.trim();
    let elasticItem = document.querySelectorAll(".elastic li");
    if (val != "") {
        elasticItem.forEach(function (elem) {
            if (elem.innerHTML.search(val) == -1) {
                elem.classList.add("hide");
            } else {
                elem.classList.remove("hide");
            }
        });
    }
};
