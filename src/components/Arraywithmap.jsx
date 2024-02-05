import "./Arraywithmap.css";
import CardComponents from "./CardComponents";
function Arraywithmap() {
  const header = [
    { name: "S.N" },
    { name: "Country" },
    { name: "Capital City" },
  ];
  const country = [
    { name: "Nepal", captialCity: "Kathmandu" },
    { name: "India", captialCity: "New Dehli" },
    { name: "China", captialCity: "beijing" },
    { name: "Japan", captialCity: "Tokyo" },
    { name: "USA", captialCity: "Washington DC" },
    { name: "Canada", captialCity: "ottawa" },
    { name: "Austrila", captialCity: "Canberra" },
    { name: "France", captialCity: "Paris" },
    { name: "Germany", captialCity: "Berlin" },
  ];
  return (
    <>
    <table className="mapp">
      <thead>
        <tr>
          {header.map((title, id) => (
            <th key={id}>{title.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {country.map((Nation, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{Nation.name}</td>
            <td>{Nation.captialCity}</td>
          </tr>
        ))
        }
      </tbody>
    </table>
    <CardComponents/>
    </>
    
  );
}

export { Arraywithmap };
