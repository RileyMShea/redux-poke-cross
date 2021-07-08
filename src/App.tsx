import { useGetPokemonByNameQuery } from "./services/pokemon";

const App = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : null}
    </div>
  );
};

export default App;
