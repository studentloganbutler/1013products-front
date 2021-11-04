import Form from "./components/Form";
import List from "./components/List";
import api from "./services/api.service";

const root = document.querySelector("#root");

api.index().then((products) => {
  root.innerHTML = `
  <main class="container mx-auto flex flex-col items-center">
    ${Form}
    ${List(products)}
  </main>
  `;

  document.querySelector("#search").addEventListener("keyup", () => {
    console.log("hello");
  });
});

// TO MASS COMMENT, DO CTRL /

// api.index().then((product) => {
// root.innerHTML =
//   "<ul>" +
//   product
//     .map((product) => `<li>${product.name} ${product.price}<li>`)
//     .join("") +
//   "</ul>";
// });

// Note to self: if error is eslint, try CTRL S
