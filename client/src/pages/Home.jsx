import { useAppContext } from "../utils/AppContext";

const Home = () => {
  const { appState, setAppState } = useAppContext();
  console.log(appState); 

  return (
    <>
      <h1 className="title-main">Home</h1>      
    </>
  );
};

export default Home;
