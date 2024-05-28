let productname = document.getElementById('nameInput');
let productprice = document.getElementById('priceInput')
let productCategory = document.getElementById('categoryInput')
let productDiscreption = document.getElementById('descInput')
let correct = document.getElementById('correct')
let sameh = document.getElementById("sameh")
let sameh2 = document.getElementById("sameh2")
let list = [];
let indxs = 0;


if (localStorage.getItem('list') !== null) {
  list = JSON.parse(localStorage.getItem("list"));
  dispaly()


}


function create() {
  if (valids() === true) {

    let proudact = {
      pname: productname.value,
      pprice: productprice.value,
      ccategory: productCategory.value,
      des: productDiscreption.value,

    }
    list.push(proudact)
    localStorage.setItem('list', JSON.stringify(list))

    console.log(list)
    dispaly()
    clear()




  } else {

    correct.classList.replace('d-none', 'd-flex')
  }


}


function clear() {
  productname.value = "";
  productprice.value = "";
  productCategory.value = "";
  productDiscreption.value = "";

}


function dispaly() {
  let trs = ``;
  for (let i = 0; i < list.length; i++) {

    trs += `
    <tr>
   <td>${i + 1}</td>
   <td>${list[i].pname}</td>
   <td>${list[i].pprice}</td>
   <td>${list[i].ccategory}</td>
   <td>${list[i].des}</td>
   <td><button onclick="updete(${i})"  class="btn btn-outline-warning"><i class="fa fa-edit"></i></button></td>
   <td><button onclick="delets(${i})"  class="btn btn-outline-danger"><i class="fa fa-trash"></i></button></td>
   </tr>
    
    `
  }
  document.getElementById('tableBody').innerHTML = trs;
}


function delets(index) {
  list.splice(index, 1)
  localStorage.setItem("list", JSON.stringify(list))
  dispaly()

}



function valids() {
  var pnamwRg = /^[A-Z][a-z]{3,10}/;
  var nameValue = productname.value
  if (pnamwRg.test(nameValue) == true) {
    return true
  } else {
    return false

  }
}


let searchInput = document.getElementById('searchInput')


function search2() {
  let trs = ``;
  for (let i = 0; i < list.length; i++) {
    if (list[i].pname.includes(searchInput.value)) {

      trs += `
      <tr>
     <td>${i + 1}</td>
     <td>${list[i].pname}</td>
     <td>${list[i].pprice}</td>
     <td>${list[i].ccategory}</td>
     <td>${list[i].des}</td>
     <td><button class="btn btn-outline-warning"><i class="fa fa-edit"></i></button></td>
     <td><button onclick="delets(${i})"  class="btn btn-outline-danger"><i class="fa fa-trash"></i></button></td>
     </tr>
      
      `
    }

  }
  document.getElementById('tableBody').innerHTML = trs;
}


function updete(i) {
  let carton = list[i]
  indxs = i
  console.log(carton)
  productname.value = carton.pname;
  productprice.value = carton.pprice;
  productCategory.value = carton.ccategory;
  productDiscreption.value = carton.des;
  sameh.classList.replace('d-none', 'd-flex')
  sameh2.classList.replace('d-flex', 'd-none')

}


function set() {

  let proudact = {
    pname: productname.value,
    pprice: productprice.value,
    ccategory: productCategory.value,
    des: productDiscreption.value,

  }
  list.splice(indxs,1,proudact)
  localStorage.setItem('list', JSON.stringify(list))
  dispaly()
  sameh.classList.replace('d-flex', 'd-none')
  sameh2.classList.replace('d-none', 'd-flex') 
  clear()

}














