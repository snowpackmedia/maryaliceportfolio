let costumes = document.querySelectorAll("#costume-list li")
let content = document.querySelector("#costume-content")
const pages = ['miracle.html','woods.html','shrek.html','peter.html','newsies.html','suite.html','chickens.html']

function highlight(index){
    costumes.forEach( (item, j) => {
        if (j==index){
            item.classList.add('active')
        }
        else{
            item.classList.remove('active')
        }
    })
}

async function loadContent(filename){
    let response = await fetch(`costumes/${filename}`)
    if (response.ok){
        let html = await response.text()
        content.innerHTML = html
    }
    else{
        content.innerHTML = "<h3>Problem loading content</h3>"
        console.log(response.statusText)
    }
}

costumes.forEach((listItem, index) => {
    listItem.addEventListener('click', () => {
        highlight(index)
        loadContent(pages[index])
    })
})