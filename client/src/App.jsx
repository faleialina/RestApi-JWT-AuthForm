import RoutesProvaider from "./RoutesProvaider/RoutesProvaider"
import useAuth from "./hook/useAuth";
import MyContext from './context/context'
function App() {
  const data = useAuth()
  const route = RoutesProvaider(data.token);

  return (
    <>
      <MyContext.Provider value={data}>
        {route}
      </MyContext.Provider>

    </>
  )
}

export default App
