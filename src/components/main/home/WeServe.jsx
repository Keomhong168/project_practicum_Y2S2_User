import React from 'react';
import './weServe.css';

const WeServe = ({ serviceItems }) => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center gap-4">
      {serviceItems.map((item, index) => (
        <div className="col-12" key={item.id}>
          <div className="box-descript-item bg-red border-red rounded-4 shadow-lg d-flex overflow-hidden">
            {index % 2 === 0 ? (
              <>
                <div className="col-6">
                  <img className="img-descript-item" src={item.image} alt={item.alt} />
                </div>
                <div className="col-6 bg-red border-red d-flex flex-column justify-content-center align-content-center p-3 text-white">
                  <div className="text-center mt-3">
                    <h1 className="box-descript-title">{item.title}</h1>
                  </div>
                  <div>
                    <p className="text-center box-descript-fs">{item.description}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-6 bg-red border-red d-flex flex-column justify-content-center align-content-center p-3 text-white">
                  <div className="text-center mt-3">
                    <h1 className="box-descript-title">{item.title}</h1>
                  </div>
                  <div>
                    <p className="text-center box-descript-fs">{item.description}</p>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                  <img className="img-descript-item" src={item.image} alt={item.alt} />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeServe;