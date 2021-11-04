import api from "./services/api.service";

const root = document.querySelector("#root");

api.index().then((product) => {
  root.innerHTML =
    "<ul>" +
    product
      .map((product) => `<li>${product.name} ${product.price}<li>`)
      .join("") +
    "</ul>";
});

root.innerHTML = '<p class="text-center">"Hello World"</p>';

// Note to self: if error is eslint, try CTRL S
