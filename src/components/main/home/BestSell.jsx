import "./bestSell.css";

// This component now accepts a prop called 'items'.
// It's good practice to add a check to make sure 'items' is an array and not empty.
const BestSell = ({ items = [] }) => {
  // A helper function to split the items array into rows of 2
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // We create rows, each containing 2 items.
  const itemRows = chunkArray(items, 2);

  return (
    <div className="container">
      {/* We map over the rows to create the row divs */}
      {itemRows.map((row, rowIndex) => (
        <div className="row mt-3" key={rowIndex}>
          {/* Then we map over the items in each row to create the cards */}
          {row.map((item) => (
            <div
              className="col-6 d-flex justify-content-center align-items-center"
              key={item.id} // Using a unique 'id' for the key is crucial
            >
              <div className="card rounded-4 best-sell-card border-red shadow-sm">
                <img
                  src={item.img} // The image source now comes from the item prop
                  className="rounded-4 border-red"
                  alt={item.name || "Product"} // Use the item's name for better accessibility
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BestSell;