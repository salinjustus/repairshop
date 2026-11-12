import './App.css';
import Greeting from './components/Greeting';
import Home from './components/Home';

const App = () => {
  const sitename = 'WSK Superrrr site';
  const styles = {
    backgroundColor: 'gray',
    color: 'red',
  };

  return (
    <>
      <h1 className="otsikko">{sitename}</h1>
      <p>Moro tässä on mahtava sivustoni {3 + 4}</p>
      <p style={styles}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde
        cupiditate cumque laudantium suscipit magnam maxime eveniet! Laboriosam
        labore iusto dicta molestias quod? Ut repellendus quibusdam harum, vel
        aperiam consectetur.
      </p>
      <Greeting name="Ulla" age={23} insTeacher={true} />
      <Greeting name="Matti" age={24} />
      <Greeting name="Liisa" />
      <Home />
    </>
  );
};
export default App;
