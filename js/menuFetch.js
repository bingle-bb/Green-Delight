fetch("menu.json")
  .then((res) => res.json())
  .then((data) => {
    const menuContainer = document.getElementById("menu");

    for (let category in data) {
      const section = document.createElement("div");
      section.className = "menu-section";

      const title = document.createElement("h2");
      title.textContent = category.toUpperCase();
      section.appendChild(title);

      const itemList = document.createElement("div");
      itemList.className = "item-list";

      data[category].forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.innerHTML = `
          <h3>${item.name}</h3>
          <p>💲${item.price.toFixed(2)}</p>
          <button onclick="addToCart('${item.id}', '${item.name}', ${
          item.price
        })">Add to Cart</button>
        `;
        itemList.appendChild(itemDiv);
      });

      section.appendChild(itemList);
      menuContainer.appendChild(section);
    }
  });

function addToCart(id, name, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ id, name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}
