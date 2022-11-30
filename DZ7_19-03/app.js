const items = document.querySelector('.items')

async function  getLinks () {
  try {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    data.forEach(item => {
      items.innerHTML += `
     <div class="content">
       <img src="image/img.jpg" alt="">
       <h3>${item.title}</h3>
       <p>${item.body}</p>

     </div>
`
    })
  } catch {

  }
}
getLinks()