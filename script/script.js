let inp = document.querySelector('input')
let sort = document.querySelector('#sort')
let add = document.querySelector('#add')
let spn = document.querySelector('ul')


function addItem(id,name,createdDate,completed){
    this.id = id
    this.name = name
    this.createdDate = createdDate
    this.completed = completed
}

add.addEventListener('click',()=>{
    spn.innerHTML += `
                   <li>
                    <input type="checkbox"> ${inp.value}
                    </li>
                    
                    `

    inp.value = ''
})
