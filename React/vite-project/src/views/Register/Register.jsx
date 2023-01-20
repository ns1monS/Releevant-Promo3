import { useState } from "react";
export default function Register() {
  let object_newUsuario = {
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
  };
  const [newUsuario, setNewUsuario] = useState(object_newUsuario);
  function handleInput(e) {
    const newRegistro = {
      ...newUsuario,
      [e.target.name]: e.target.value,
    };
    setNewUsuario(newRegistro);
  }

  function registrar(e) {
    e.preventDefault();
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newUsuario),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        alert("usuario registrado correctamente");
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }

  return (
    <div class="container justify-content-center ">
      <div>
        <div class="py-5 text-lg-center">
          <h2>Registrate</h2>
        </div>
      </div>
      <div class="d-flex">
        <form
          class="needs-validation justify-content-center"
          onSubmit={registrar}
        >
          <div class="row g-3 d-flex justify-content-center">
            <div class="col-sm-6">
              <label for="text" class="form-label">
                First Name
              </label>
              <input
                type="text"
                name="nombre"
                value={newUsuario.nombre}
                onChange={handleInput}
                class="form-control"
                id="phone"
                placeholder="write a first name"
                required
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div class="col-sm-6">
              <label for="text" class="form-label">
                apellidos
              </label>
              <input
                type="text"
                name="apellidos"
                value={newUsuario.apellidos}
                onChange={handleInput}
                class="form-control"
                id="phone"
                placeholder="write a surname "
                required
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div class="col-sm-6">
              <label for="text" class="form-label">
                gmail
              </label>
              <input
                type="text"
                name="email"
                value={newUsuario.email}
                onChange={handleInput}
                class="form-control"
                id="phone"
                placeholder="write a gmail"
                required
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div class="col-sm-6">
              <label for="password" class="form-label">
                password
              </label>
              <input
                type="password"
                class="form-control"
                name="password"
                value={newUsuario.password}
                onChange={handleInput}
                placeholder="write a password"
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <hr class="my-4" />

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="same-address"
              />
              <label class="form-check-label" for="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="save-info" />
              <label class="form-check-label" for="save-info">
                Save this information for next time
              </label>
            </div>

            <hr class="my-4" />

            <div class="my-3"></div>
          </div>
          <button
            class="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={registrar}
          >
            Continue to checkout
          </button>
        </form>
        <a href="index.html">Inicio</a>
      </div>

      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; 2017–2022 Company Name</p>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
