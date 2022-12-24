import Card from "./components/card/Card";
import data from "./utilities/data";

function App() {
  // JS ; normal js code syntax

  return (
    // JSX  ; we must write all codes within the {}.
  <>
    {/* we cannot use ForEach for the following code because forEach does not return a value. */}

    {data.map((item) => {
      const { id, language, img, btnName} = item;
      return <Card key={id} language={language} img={img} btn={btnName} />;
    })}
  </>
  );
}

export default App;
