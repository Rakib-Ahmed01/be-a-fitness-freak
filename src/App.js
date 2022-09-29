import { Accordion } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineArrowCircleDown } from 'react-icons/hi';
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
      <div className="my-7">
        <Accordion alwaysOpen={true} arrowIcon={HiOutlineArrowCircleDown}>
          <Accordion.Panel>
            <Accordion.Title>What is Flowbite?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to{' '}
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  get started
                </a>{' '}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Is there a Figma file available?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the{' '}
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Figma design system
                </a>{' '}
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What are the differences between Flowbite and Tailwind UI?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
