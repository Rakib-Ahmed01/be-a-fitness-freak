import { Accordion } from 'flowbite-react';
import { HiOutlineArrowCircleDown } from 'react-icons/hi';

const Questions = () => {
  return (
    <div>
      <div className="my-7">
        <Accordion alwaysOpen={true} arrowIcon={HiOutlineArrowCircleDown}>
          <Accordion.Panel>
            <Accordion.Title>How does React work?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                React is a JavaScript library for building user interfaces. It
                is a component based library. React uses a declarative paradigm
                that makes it easier to reason about your application and aims
                to be both efficient and flexible. It designs simple views for
                each state in your application, and React will efficiently
                update and render just the right component when your data
                changes.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What is the difference between state and props?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <code className="font-semibold">Props</code>: props is used to
                pass data from parent to child. But we can not pass props fro
                child t parent. We can any type of valid data as props. It is a
                JavaScript object.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                <code className="font-semibold">State</code>: State is also a
                plain Javascript object that contains information. It represents
                the dynamic parts of the React component, i.e. data that can
                change.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What does useEffect() does other than calling the api?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The useEffect Hook allows you to perform side effects (things
                that are not in React's resposibilities) in your components.
                useEffetct() is the combination of all life cycle methods that
                are in Class components. Some works/function of useEffect...
              </p>
              <ul className="mb-2 text-gray-500 dark:text-gray-400 list-decimal ml-4">
                <li>Updating DOM</li>
                <li>Timers</li>
                <li>etc</li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default Questions;
