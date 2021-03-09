function getParam(parametr) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(parametr);
}

function logOut() {
    alert("Logged out")
}

function goToMoreInfo(src) {
    window.location.href = "moreInfo.html?src=" + src;
}

function loadMoreInfo() {
    const srcParam = getParam("src");
    const info = photoList.find(element => element.src === srcParam);
    if (info == undefined) {
        alert("Page doesn't exist");
        window.location.href = "main.html";
        return;
    }
    document.getElementById("minePhoto").src = info.src;
    document.getElementById("author").innerHTML = info.author;
    document.getElementById("description").innerHTML = info.description;
    document.getElementById("extendedDescription").innerHTML = info.extendedDescription;
    document.getElementById("like").innerHTML = "Like " + info.like;

    let ul = document.getElementById("comments");
    let li = null;
    for (let index = 0; index < info.comments.length; index++) {
        const element = info.comments[index];
        li = document.createElement("li");
        li.appendChild(document.createTextNode(element.author + ":  " + element.message));
        ul.appendChild(li);
    }
}

function addComment() {
    let nick = null;
    do {
        nick = prompt("Your Nick", "")
        if (nick == null) {
            return
        }
    } while (nick == "" || nick <= 0);

    let message = null;
    do {
        message = prompt("Comments message", "")
        if (message == null) {
            return
        }
    } while (message == "" || message <= 0);
}
