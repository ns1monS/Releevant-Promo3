export default function Wrapper({ children }) {
    return (
      <div style={{ display: "flex"}}>
        {children}
      </div>
    );
  }