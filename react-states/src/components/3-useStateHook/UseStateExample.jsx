
import { useState } from 'react';

const UseStateExample = () => {
  const [count, setCount] = useState(0);   //! array destruc.
  const [info, setInfo] = useState({
    name: 'Ahmet Yilmaz',
    email: 'ay@gmail.com',
    age: 32,
  });

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  const incAge = () => {
    setInfo({ ...info, age: info.age + 1 });
  };

  console.log(info);
  return (
    <div className="container text-center mt-4">
      <section>
        <h1 className="display-4 text-danger m-4">USESTATE COUNT:{count}</h1>
        <button onClick={inc} className="btn btn-success">
          INC
        </button>
        <button onClick={() => setCount(0)} className="btn btn-dark">
          CLR
        </button>
        <button onClick={dec} className="btn btn-warning">
          DEC
        </button>
      </section>

      <section>
        <h1 className="display-4 text-danger m-4">USESTATE OBJECT</h1>
        <h2>{info.name}</h2>
        <h3>{info.email}</h3>
        <h3>{info.age}</h3>
        <button onClick={incAge} className="btn btn-info">
          inc age
        </button>
      </section>
    </div>
  );
};

export default UseStateExample;
