import Card from './data/components/Card/Card';
import FooterComponent from './data/components/Footer/Footer';
import Header from './data/components/Header/Header';
import data from './data/data.json';

console.log(data);

function App() {
  return (
    <div className="container mx-auto relative">
      <Header />
      <div className="py-4">
        <h2 className="text-center text-xl font-semibold text-cyan-500">
          Select Today's Exercise(s)
        </h2>
      </div>
      <main className="mb-7 flex gap-2">
        <section>
          <div
            id="cards"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {data.map((card) => {
              return <Card key={Math.random()} card={card} />;
            })}
          </div>
        </section>
        <section className="w-[800px] h-screen sticky top-0 bg-black text-white">
          fgfsd
        </section>
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
