// const Shimmer = () => {
//   return (
//     <div className="shimmer">
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//       <div className="shimmer-card"></div>
//     </div>
//   );
// };

// const Shimmer = () => {
//   const cards = [];
//   for (let i = 0; i < 10; i++) {
//     cards.push(<div key={i} className="shimmer-card"></div>);
//   }

//   return <div className="shimmer">{cards}</div>;
// };

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill()
        .map((_, index) => (
          <div
            className="m-4 p-4 rounded-lg bg-gray-100 w-64 h-72"
            key={index}
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
