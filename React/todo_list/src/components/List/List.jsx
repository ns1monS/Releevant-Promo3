import ListItem from "../ListItem/ListItem";

export default function List({ items, setState }) {
  function removeItem(id) {
    setState(items.filter((item) => item.id !== id));
  }
  return (
    <>
      {items ? (
        <ul>
          {items.map((item) => (
            <ListItem setState={removeItem} key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <h3>Cargando...</h3>
      )}
    </>
  );
}
