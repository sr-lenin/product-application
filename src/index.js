class product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.querySelector("#product-list");
    const element = document.createElement("div");
    element.innerHTML = `
    <div class='card text-center mb-4'>
      <div class='card-body'>
        <strong>Product Name</strong>: ${product.name}
        <strong>Product Price</strong>: ${product.price}
        <strong>Product Year</strong>: ${product.year}
        <a href='#' class='btn btn-danger' name='delete'>Delete</a>
      </div>
    </div>    
    `;
    productList.appendChild(element);
  }

  resetForm() {
    document.querySelector("#product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.parentElement.remove();
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} `;
    div.appendChild(document.createTextNode(message));
    // showing in DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#app");
    container.insertBefore(div, app);
  }
}

// DOM events
document.querySelector("#product-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const year = document.querySelector("#year").value;

  const products = new product(name, price, year);

  const ui = new UI();
  ui.addProduct(products);
  ui.resetForm();
  ui.showMessage('Product Added good', 'succes')
});

document.querySelector("#product-list").addEventListener("click", (event) => {
  const ui = new UI();
  ui.deleteProduct(event.target);
});
