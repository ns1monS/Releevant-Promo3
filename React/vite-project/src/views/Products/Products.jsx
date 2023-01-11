export default function Products() {
  return (
    <div className="globalContainer m-0 ">
      <h1 className="text-center">Los Mejores Juegos al mejor precio</h1>
      <div className="gridProductos  d-flex p-2">
        <aside className="m-0 p-0 d-block">
          <form className="d-flex" role="search">
            <input
              className=" me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-primary btn-primary-outline-success"
              type="button"
            >
              Buscar
            </button>
          </form>
          <ul className="list-unstyled p-4">
            <h3 className="p-3 ">Géneros</h3>
            <li>
              <input type="checkbox" /> Acción
            </li>
            <li>
              <input type="checkbox" /> Indie
            </li>
            <li>
              <input type="checkbox" /> Aventuras
            </li>
            <li>
              <input type="checkbox" /> RPG
            </li>
            <li>
              <input type="checkbox" /> Estrategia
            </li>
            <li>
              <input type="checkbox" /> Simulación
            </li>
            <li>
              <input type="checkbox" /> FPS
            </li>
            <li>
              <input type="checkbox" /> Deportes
            </li>
            <li>
              <input type="checkbox" /> MMO
            </li>
          </ul>
        </aside>
        <section className="d-block w-100">
          <div>
            <div className="d-flex justify-content-between p-5">
              <p>Juegos encontrados</p>
              <div className="btn-group">
                <button
                  className="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filtrar
                </button>
                <ul className="dropdown-menu">
                  <li>Precio</li>
                  <li>Puntuacion</li>
                  <li>Novedades</li>
                </ul>
              </div>
            </div>
            <div className="row imagenesCards" id="tarjeta">
              <div className="card col-3 p-0">
                <figure>
                  <img
                    src="recursos/destinycard.jpg"
                    className="card-img-cap w-100 "
                    alt="..."
                  />
                </figure>
                <div className="card-body ">
                  <h5 className="card-title">Destiny</h5>
                  <p className="card-text">
                    Explora las estrellas como un guardian luchando contra el
                    mal .
                  </p>
                  <a href="#" className="btn btn-primary">
                    Saber mas
                  </a>
                </div>
              </div>
              <div className="card col-3 p-0">
                <figure>
                  <img
                    src="recursos/masseffect2card.jpg"
                    className="card-img-cap w-100 "
                    alt="..."
                  />
                </figure>
                <div className="card-body ">
                  <h5 className="card-title">Destiny</h5>
                  <p className="card-text">
                    Explora las estrellas como un guardian luchando contra el
                    mal .
                  </p>
                  <a href="#" className="btn btn-primary">
                    Saber mas
                  </a>
                </div>
              </div>
              <div className="card col-3 p-0">
                <figure>
                  <img
                    src="recursos/HaloInfinite.jpeg"
                    className="card-img-cap w-100 "
                    alt="..."
                  />
                </figure>
                <div className="card-body ">
                  <h5 className="card-title">Destiny</h5>
                  <p className="card-text">
                    Explora las estrellas como un guardian luchando contra el
                    mal .
                  </p>
                  <a href="#" className="btn btn-primary">
                    Saber mas
                  </a>
                </div>
              </div>
              <div className="card col-3 p-0">
                <figure>
                  <img
                    src="recursos/battlefront2.png"
                    className="card-img-cap w-100 "
                    alt="..."
                  />
                </figure>
                <div className="card-body ">
                  <h5 className="card-title">Destiny</h5>
                  <p className="card-text">
                    Explora las estrellas como un guardian luchando contra el
                    mal .
                  </p>
                  <a href="#" className="btn btn-primary">
                    Saber mas
                  </a>
                </div>
              </div>
              <div className="card col-3 p-0">
                <figure>
                  <img
                    src="recursos/steelrising.jpg"
                    className="card-img-cap w-100 "
                    alt="..."
                  />
                </figure>
                <div className="card-body ">
                  <h5 className="card-title">Destiny</h5>
                  <p className="card-text">
                    Explora las estrellas como un guardian luchando contra el
                    mal .
                  </p>
                  <a href="#" className="btn btn-primary">
                    Saber mas
                  </a>
                </div>
              </div>
              <div className="card col-3 p-0">
                <figure>
                  <img
                    src="recursos/eldenring.jpg"
                    className="card-img-cap w-100 "
                    alt="..."
                  />
                </figure>
                <div className="card-body ">
                  <h5 className="card-title">Destiny</h5>
                  <p className="card-text">
                    Explora las estrellas como un guardian luchando contra el
                    mal .
                  </p>
                  <a href="#" className="btn btn-primary">
                    Saber mas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
