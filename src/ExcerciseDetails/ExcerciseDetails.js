import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import { GoLocation } from 'react-icons/go';
import BreakTimes from '../data/components/BreakTimes/BreakTimes';

// toast.configure();
const getBreakTime = () => {
  if (localStorage.getItem('breakTime')) {
    return +localStorage.getItem('breakTime');
  } else {
    return 0;
  }
};

const getBreakTimes = () => {
  if (localStorage.getItem('breakTimes')) {
    return JSON.parse(localStorage.getItem('breakTimes'));
  } else {
    return [
      {
        time: 1,
        isSelected: false,
      },
      {
        time: 2,
        isSelected: false,
      },
      {
        time: 3,
        isSelected: false,
      },
      {
        time: 4,
        isSelected: false,
      },
      {
        time: 5,
        isSelected: false,
      },
    ];
  }
};

const ExcerciseDetails = ({ exerciseTime, notify }) => {
  const [breakTimes, setBreakTimes] = useState(getBreakTimes());
  const [isActivityDone, setIsActivityDone] = useState(false);
  const [breakTime, setBreakTime] = useState(getBreakTime());

  useEffect(() => {
    localStorage.setItem('breakTime', breakTime);
  }, [breakTime]);

  useEffect(() => {
    localStorage.setItem('breakTimes', JSON.stringify(breakTimes));
  }, [breakTimes]);

  const handleBreakTime = (minute) => {
    setBreakTime(minute);
    setBreakTimes((prevState) => {
      return prevState.map((breakTime) => {
        return breakTime.time === minute
          ? { ...breakTime, isSelected: true }
          : { time: breakTime.time, isSelected: false };
      });
    });
  };

  const handleActivity = () => {
    setIsActivityDone((prevState) => !prevState);
  };

  return (
    <div>
      <div>
        {isActivityDone && <ReactConfetti className="mx-auto" width={170} />}
      </div>
      <div className="font-medium">
        <div className="md:flex justify-center items-center  gap-1">
          <img
            src="https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="w-10 h-10 object-cover rounded-full"
            alt=""
          />
          <div>
            <h2>Rakib Ahmed</h2>
            <p className="flex items-center text-gray-500/90  -mt-1">
              <GoLocation /> Kushtia, Bangladesh
            </p>
          </div>
        </div>
        <div className="bg-white flex my-3 py-3 px-1 rounded justify-evenly">
          <h3>
            <span className="text-lg font-semibold">90</span>
            <span className="text-gray-500/80">kg</span>
          </h3>
          <h3>
            <span className="text-lg font-semibold">5.11</span>
            <span className="text-gray-500/80">ft</span>
          </h3>
          <h1>
            <span className="text-lg font-semibold">20</span>
            <span className="text-gray-500/80">yrs</span>
          </h1>
        </div>
        <div>
          <h2 className="font-semibold">Add a Break</h2>
          <div className="bg-white flex py-3 px-1 rounded justify-evenly">
            {breakTimes.map((breakTime) => {
              return (
                <BreakTimes
                  key={Math.random()}
                  breakTime={breakTime}
                  handleBreakTime={handleBreakTime}
                />
              );
            })}
          </div>
        </div>
        <div className="my-3">
          <h2 className="font-semibold">Excercise Details</h2>
          <div className="bg-white flex px-2 py-3 rounded justify-between">
            <h3>Exercise Time</h3>
            <h3 className="text-gray-500/80">
              {exerciseTime} {exerciseTime <= 1 ? ' Minute' : ' Minutes'}
            </h3>
          </div>
          <div className="bg-white flex px-2 py-3 rounded justify-between mt-2">
            <h3>Break Time</h3>
            <h3 className="text-gray-500/80">
              {breakTime}
              {breakTime <= 1 ? ' Minute' : ' Minutes'}
            </h3>
          </div>
        </div>

        {isActivityDone ? (
          <button
            className="bg-cyan-500 text-white w-full py-1 rounded font-semibold mt-2"
            onClick={(e) => {
              handleActivity();
              notify(e);
            }}
          >
            Set New Activity
          </button>
        ) : (
          <button
            className="bg-cyan-500 text-white w-full py-1 rounded font-semibold mt-2"
            onClick={(e) => {
              handleActivity();
              notify(e);
            }}
          >
            Activity Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default ExcerciseDetails;
