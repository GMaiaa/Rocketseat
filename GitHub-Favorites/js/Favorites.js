export class Favorites {
  constructor(root) {
    this.root = document.querySelectorSelector(root);
    this.load()
  }

  load(){
     this.entries = [
      {
      login: 'GMaiaa',
      name: "Gabriel Maia",
      public_repos: '20',
      followers: '8'
    }
  ]
  }

  delete(user){
    const filteredEntries = this.entries.filter(entry => 
        entry.login !== user.login)
      
        console.log(filteredEntries)
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelectorSelector("table tbody");

    this.update();
  }

  update() {
    this.removeAllTr();

 
  
  this.entries.forEach( user => {
    const row = this.createRow()

    row.querySelector('.user img').src = `https://github.com/${user.login}.png`
    row.querySelector('.user img').alt = `Imagem de ${user.name}`
    row.querySelector('.user p').textContent = user.name
    row.querySelector('.user span').textContent = user.login
    row.querySelector('.repositories').textContent = user.public_repos
    row.querySelector('.followers').textContent = user.followers

    row.querySelector('.remove').onclick = () => {
      const isOk = confirm('Confimar a remoção da linha?')
      
      if(isOk){
        this.delete(user)
      }
    }

    this.tbody.append(row)
  } )
  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML =  `
  
  <td class="user">
    <img src="https://media.discordapp.net/attachments/564238411280416773/1101327872930619422/FB_IMG_1470577226793.jpg?width=624&height=468" alt="">
    <a href="">
      <p></p>
      <span></span>
    </a>
  </td>
  <td class="repositories">

  </td>
  <td class="followers">

  </td>
  <td>
    <button class="remove">&times;</button>
  </td>
  `

     return tr;
  }

  removeAllTr() {
    
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove;
    });
  }
}
