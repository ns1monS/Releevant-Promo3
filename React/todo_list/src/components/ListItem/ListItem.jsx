export default function ListItem({ item, setState }) {
  return (
    <li className={`list-group-item d-flex justify-content-between`}>
      {item.title}
      <button onClick={() => setState(item.id)} className="btn btn-danger">
        X
      </button>
    </li>
  );
}
