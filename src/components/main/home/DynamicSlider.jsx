
const DynamicSlider = ({ images }) => {
  // Use provided images or fallback to default images if the prop is empty
  const imageSources = images && images.length > 0 ? images : [
    'https://placehold.co/1200x500/c00000/ffffff?text=Slide+1',
    'https://placehold.co/1200x500/343a40/ffffff?text=Slide+2',
    'https://placehold.co/1200x500/0d6efd/ffffff?text=Slide+3',
    'https://placehold.co/1200x500/0d6efd/ffffff?text=Slide+4',
  ];

  return (
    <div id="dynamicCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner border-right border-red rounded-4 shadow-lg">
        {imageSources.map((src, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={src}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicSlider;