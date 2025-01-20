



const createUser = (name, nick, email, password) => {
    const user = {
      name: name,
      nick: nick,
      email: email,
      password: password,    
    }
}

const form = document.querySelector(".form");

addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = form.querySelector(".nombre").value;
  const nick = form.querySelector(".nick").value;
  const email = form.querySelector(".email").value;
  const password = form.querySelector(".password").value;
  createUser(nombre, nick, email, password);
});