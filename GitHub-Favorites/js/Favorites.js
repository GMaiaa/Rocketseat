export class Favorites{
  constructor(root){
    this.root = document.querySelectorSelector(root)
  }
}

export class FavoritesView extends Favorites{
 constructor(root){
  super(root)

  this.update()
 }

 update(){
  const tbody = this.root.querySelectorSelector
  ('table tbody')

  tbody.querySelectorAll('tr')
  .forEach((tr) => {
    tr.remove
  })

 }
}