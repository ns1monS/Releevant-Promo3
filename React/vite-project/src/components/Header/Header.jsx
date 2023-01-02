import { BsFillBagFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
export default function Header() {
  return (
    <header className="container d-flex  py-3 gap-2 h4 ">
      <div className="d-flex gap-2 align-items-center">
        <BsFillBagFill />
        MyReleevantShop
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar Productos"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
        />
      </div>
      <button type="button" className="btn btn-secondary">
        <BsSearch />
      </button>
    </header>
  );
}
