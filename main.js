const carouselItems = document.querySelectorAll(".carousel_item"); 
let i = 1;

setInterval(() => {
 Array.from(carouselItems).forEach((item,index) => {

   if(i < carouselItems.length){
    item.style.transform = `translateX(-${i*100}%)`
   }
  })


  if(i < carouselItems.length){
    i++;
  }
  else{
    i=0;
  }
},2000)
const productsContainer = document.getElementById('products');

if (productsContainer) {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const productCard = `
          <div class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price} INR</p>
            <a href="product.html?id=${product.id}">View Details</a>
          </div>
        `;
        productsContainer.innerHTML += productCard;
      });
    })
    .catch(error => console.error('Error fetching products:', error));
}

const productDetails = window.location.search;
if (productDetails.includes('?id=')) {
  const id = new URLSearchParams(productDetails).get('id');
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(product => {
      if (product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-name').innerText = product.title;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = product.price;
      }
    })
    .catch(error => console.error('Error fetching product details:', error));
}
 

  function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function dropdown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function dropdown3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn3')) {
      var dropdowns = document.getElementsByClassName("dropdown-content3");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
