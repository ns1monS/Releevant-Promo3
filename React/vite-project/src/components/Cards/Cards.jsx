import { CardMenu } from "../Const/CardMenu";

export default function Cards() {
  return (
    <>
      {CardMenu.map((idCard) => (
        <div class="col-3">
        <article class="card">
          <img src="recursos/battlefront2.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="card-title">{idCard.title}</h5>
              <div class="">
                <span class="price">{idCard.precio}</span>
                <i class="bi bi-currency-euro text-primary"></i>
              </div>
            </div>
            <p class="card-text">{idCard.description}</p>
            <div class="d-flex gap-3">
              <a href="#" class="btn btn-primary flex-fill">
                Añadir al carrito
              </a>
              <a href="#" class="btn btn-secondary">
                ver
              </a>
            </div>
          </div>
        </article>
        </div>
      ))}
    </>
  );
}
