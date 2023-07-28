const title_ = document.getElementById("title");
const name_ = document.getElementById("name");
const height_ = document.getElementById("height");
const weight_ = document.getElementById("weight");
const image_ = document.getElementById("image");

const generate = () => {
  id = Math.floor(Math.random() * 300);
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      image_.src = name_.innerText = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
      image_.alt = data.name;
      name_.innerText =
        String(data.name).charAt(0).toLocaleUpperCase() +
        String(data.name).slice(1);
      title_.innerText =
        String(data.name).charAt(0).toLocaleUpperCase() +
        String(data.name).slice(1);
      weight_.innerText = Math.floor(Number(data.weight) * 0.1);
      height_.innerText = Math.floor(Number(data.height) * 10);
    });
};
generate();
document.getElementById("gp").addEventListener("click", generate);
