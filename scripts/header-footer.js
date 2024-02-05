let header = document.querySelector("header")
let footer = document.querySelector("footer")

async function getHeader(){
    let response = await fetch('header.html')
    if (response.ok){
        let html = await response.text()
        header.innerHTML = html
        getActive()
    }
    else{
        header.innerHTML = "<h1>Problem loading header</h1>"
    }
}

async function getFooter(){
    let response = await fetch('footer.html')
    if (response.ok){
        let html = await response.text()
        footer.innerHTML = html
    }
    else{
        footer.innerHTML = "<h1>Problem loading footer</h1>"
    }
}

function getActive(){
    let nav = document.querySelector("nav")    
    let current = window.location.href    
    let children = nav.children
    for (i=0; i<children.length; i++){
        item = children[i]
        // console.log(`${item.href} ${current}`)
        if (item.href == current){
            item.classList.add('active')
        }
    }
}

getHeader()
getFooter()