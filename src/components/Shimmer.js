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
    <div className="shimmer">
      {Array(10).fill(<div className="shimmer-card"></div>)}
    </div>
  );
};

export default Shimmer;
