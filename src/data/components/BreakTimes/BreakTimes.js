import './BreakTimes.css';

const BreakTimes = ({ breakTime, handleBreakTime }) => {
  const { time, isSelected } = breakTime;
  const id = isSelected ? 'cyan' : 'gray';
  return (
    <div id="break-time">
      <h4
        id={id}
        className="flex justify-center items-center w-8 h-8 text-xs rounded-full cursor-pointer"
        onClick={() => handleBreakTime(time)}
      >
        {time}m
      </h4>
    </div>
  );
};

export default BreakTimes;
