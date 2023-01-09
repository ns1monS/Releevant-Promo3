// import { HomeMain } from "../../components/Const/HomeMain";
// import { Link } from "react-router-dom";
import { useState } from "react";
import Cards from "../../components/Cards/Cards";
export default function Home() {
  const [textoBase, setTextoBase] = useState(false);

  function CambiarTexto() {
    setTextoBase(!textoBase);
  }

  return (
    // <div>
    //   <h1>
    //     <p> {textoBase ? "En el texto pone patata" : "Y ahora pone judias"}</p>
    //     <button onClick={CambiarTexto}>Cambia el texto maquina </button>
    //   </h1>
    // </div>
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner" id="productosDestacados">
          <div class="carousel-item active">
            <img src="recursos/destiny.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption ">
              <h5 class="display-2">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <a href="#" class="btn btn-primary">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container d-flex justify-content-between my-5">
        <h4>Nuestros mejores productos</h4>
        <a href="#" class="btn btn-outline-primary">
          Ver todos
        </a>
      </div>
      <section class="container my-5">
        <div class="row">
          <Cards />
        </div>
      </section>

      <section class="bg-light my-5 py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>testimonios de cliente</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                et accusamus aliquid ipsum asperiores facere laboriosam.
                Consectetur dolorem corrupti quasi reiciendis, perferendis,
                praesentium facilis et atque autem magni dignissimos provident?
              </p>
              <a href="#" class="btn btn-secondary">
                Ver mas
              </a>
            </div>
            <div class="col-md-6">
              <div
                id="carouselExampleCaptions2"
                class="carousel carousel-dark slide"
                data-bs-ride="false"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="carousel-caption">
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                      <h5>First slide label</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="carousel-caption">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="carousel-caption">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions2"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions2"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"
      ></script>
      <script src="javascript/main.js"></script>
    </div>
  );
}
