import { useState } from 'react';
import Card from './data/components/Card/Card';
import FooterComponent from './data/components/Footer/Footer';
import Header from './data/components/Header/Header';
import data from './data/data.json';
import ExcerciseDetails from './ExcerciseDetails/ExcerciseDetails';

function App() {
  const [exerciseTime, setExerciseTime] = useState(0);

  const handleAddToList = (min) => {
    setExerciseTime((prevMins) => prevMins + min);
  };

  return (
    <div className="container mx-auto relative">
      <Header />
      <div className="py-4">
        <h2 className="text-center text-xl font-semibold text-cyan-500">
          Select Today's Exercise(s)
        </h2>
      </div>
      <main className="mb-7 flex gap-3">
        <section>
          <div
            id="cards"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {data.map((card) => {
              return (
                <Card
                  key={Math.random()}
                  card={card}
                  handleAddToList={handleAddToList}
                />
              );
            })}
          </div>
        </section>
        <section className="w-[900px] sticky top-0 bg-cyan-200/90 text-black rounded p-2">
          <ExcerciseDetails exerciseTime={exerciseTime} />
        </section>
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
