const baseURL = "http://localhost:3000/api/v1";
const Product = {
  index() {
    return fetch(`${baseURL}/products`).then((response) => {
      console.log(response);
      return response.json();
    });
  },

  show(id) {
    return fetch(`${baseURL}/products/${id}`).then((res) => res.json());
  },
};

function navigateTo(id) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  document.querySelector(`.page#${id}`).classList.add("active");

  document.querySelectorAll("a.item").forEach((page) => {
    page.classList.remove("active");
  });

  const navLink = document.querySelector(`a[data-target=${id}]`);
  if (navLink) {
    navLink.classList.add("active");
  }
}

const navbar = document.querySelector(".menu.navbar");

navbar.addEventListener("click", (event) => {
  const navLink = event.target.closest("a");

  if (navLink) {
    event.preventDefault();
    const pageId = navLink.dataset.target;
    navigateTo(pageId);
  }
});

const productsContainer = document.querySelector(".product-list");
function loadproducts() {
  Product.index().then((products) => {
    console.log(products);
    productsContainer.innerHTML = products
      .map((q) => {
        return `
            <li>
                <a class="product-link" data-id="${q.id}" href="#">${q.id} - ${q.title}</a>
            </li>
            `;
      })
      .join("");
  });
}

const productShowPage = document.querySelector("#product-show");

function renderProductShowPage(id) {
  Product.show(id).then(({ id, title, description, price }) => {
    productShowPage.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <small>$ ${price}</small>
        <div>
            <button data-action="edit" data-id="${id} href="#">Edit</button>
            <button data-action="delete" data-id="${id} href="#">Delete</button>
        </div>
        `;
    navigateTo("product-show");
  });
}

loadproducts();

productsContainer.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.matches("a.product-link")) {
    const productId = event.target.dataset.id;
    renderProductShowPage(productId);
  }
});
