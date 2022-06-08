import React from "react";
import "../styles/Pagination.css";

const Paginacion = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <>
      <div className="container-pag">
        {prev ? (
          <div className="container-button">
            <button className="button-pag" onClick={handlePrevious}>
              Previous
            </button>
          </div>
        ) : null}

        {next ? (
          <div className="container-button">
            <button className="button-pag" onClick={handleNext}>
              Next
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Paginacion;
