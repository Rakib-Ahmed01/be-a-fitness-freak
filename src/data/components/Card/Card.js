const Card = ({ card }) => {
  const { img, title, desc, age, time } = card;

  return (
    <div id="card" className="border p-1 rounded ">
      <img src={img} className="card-img" alt={title} />
      <h2 className="title">{title}</h2>
      <p className="text-gray-500/80">{desc}</p>
      <h3 className="font-medium">For Age: {age} Years</h3>
      <h3 className="font-medium">Time Required: {time} Minutes</h3>
      <button className="bg-cyan-500 text-white w-full py-1 rounded font-semibold mt-2">
        Add To List
      </button>
    </div>
  );
};

export default Card;
