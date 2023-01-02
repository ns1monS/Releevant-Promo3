import ButtonPrimary from "../Button-Primary/Button-Primary";
export default function Card({ url, title, description }) {
  return (
    <div class="card col-3 p-0">
      <figure>
        <img src={url} class="card-img-cap w-100 " alt="..." />
      </figure>
      <div class="card-body ">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <ButtonPrimary />
      </div>
    </div>
  );
}
