import "./App.css";
import { useAxios } from "./useAxios";

function App() {
  const { data, error, loading } = useAxios(
    "https://jsonplaceholder.typicode.com/users"
  );
  const {
    data: data2,
    error: error2,
    loading: loading2,
  } = useAxios("https://catfact.ninja/fact");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <ul>
        {data.map((user) => {
          return <li>{user.name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
