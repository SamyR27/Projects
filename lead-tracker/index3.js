let myleads = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))

if(leadsfromlocalstorage) {
    myleads = leadsfromlocalstorage;
    renderLeads()
}


function renderLeads() {
    let listitems = ""
    for (let i = 0; i < myleads.length; i++) {
        listitems += `
                    <li>
                        <a target='_black' href='${myleads[i]}'>
                        ${myleads[i]}
                        </a>
                    </li>`
    }
    ulEl.innerHTML = listitems
}



deleteBtn.addEventListener("dblclick",function() {
    localStorage.clear()
    myleads = []
    renderLeads()
})

inputbtn.addEventListener("click", function () {
    myleads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderLeads()

    console.log(localStorage.getItem("myleads"))
})



