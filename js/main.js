(async function () {
    for await (let text of asyncGenerator()) {
        displayRecipe(text)
    }
})();

async function* asyncGenerator() {
    let i = 1
    while (i < 10) {
        let data = await readTextFile("recipes/" + i + ".md")
        if (data.includes("<title>404 Not Found</title>")) {
            break
        }
        i++
        yield data
    }
}

async function readTextFile(filePath) {
    let promise = await fetch(filePath)
    let response = promise.text()
    return response
}

function displayRecipe(recipe) {
    let converter = new showdown.Converter()

    let newRecipeElement = document.createElement('p')
    newRecipeElement.innerHTML = converter.makeHtml(recipe)
    let recipesContainer = document.querySelector("#recipesContainer");
    recipesContainer.insertBefore(newRecipeElement, recipesContainer.firstChild)
}