readTextFile("./recipes/2019-07-11-Blumenkohl.md");

function readTextFile(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(result => {
            let converter = new showdown.Converter(),
                text = result,
                html = converter.makeHtml(text);
                document.querySelector("#recipesContainer").innerHTML = html;
        })
}