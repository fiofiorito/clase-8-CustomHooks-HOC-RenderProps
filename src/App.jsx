// import useApiData from './customHooks/useApiData'
import './App.css'
import useBoolean from './customHooks/useBoolean'
import Counter from './components/counter/Counter'
import ListContainer from './components/list/ListContainer';
import UserProfileHOC from './components/UserProfile';
import CounterRenderProps from './components/CounterRenderProps';
import NavBar from './components/navbar/NavBar';

function App() {
  /*  ESTO ES DE useApiData:
    const { data, loading, error } = useApiData("https://rickandmortyapi.com/api/character");
    console.log(data.results); */


  // para usar un custom hook se tiene q hacer DESESCTRUCTURACION del array q devuelve el custom hook!!
  // const [value, function] = useBoolean() => como es un array se puede modificar los nombres al usarlo
  const [on, handleClick] = useBoolean()

  return (
    <main>
      <div>
        <NavBar />
      </div>
      <div className='center'>
        <div className='centerChild'>
          <h3>👇 Boton con custom Hook 👇</h3>
          <button onClick={handleClick}>
            {on ? "encendido" : "apagado"}
          </button>
        </div>
        <div className='centerChild'>
          <h3>👇 Contador magico con custom Hook 👇</h3>
          <Counter />
        </div>
        <div className='centerChild'>
          <h3>Abrir la consola para ver al custom Hook de la API :&#41;</h3>
        </div>
        <div className='centerChild'>
          <h3>👇 Patrones 👇</h3>
          <ListContainer />
        </div>
        <div className='centerChild'>
          <h3>👇 Patrones 2 👇</h3>
          <UserProfileHOC />
        </div>
        <div className='centerChild'>
          <h3>👇 Render Props 👇</h3>
          {/* en este caso se pasa el componente con openning and closing tags para q pueda
        tener un hijo dentro */}
          <CounterRenderProps>
            {/* dentro lleva codigo JS, a la funcion q lleva adentro se le debe dar los
          MISMOS PARAMETROS q tenia el children del patron RenderProps */}
            {
              (counter, increment, decrement) => {
                return <div className='counter-grid'>
                  <button onClick={decrement}>restar</button>
                  <p>{counter}</p>
                  <button onClick={increment}>sumar</button>
                </div>
              }
            }
          </CounterRenderProps>
        </div>


      </div>
    </main>
  )
}

export default App
