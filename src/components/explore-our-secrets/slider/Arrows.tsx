const Arrows = () => {
  return (
    <div className="splide__arrows">
      <button
        className="splide__arrow splide__arrow--prev"
        style={{
          background: "none",
          left: "-79.32px",
        }}
      >
        <img
          src="/img/explore-our-secrets/prev.svg"
          alt="Prev"
          className="w-[12px] md:w-auto"
        />
      </button>

      <button
        className="splide__arrow splide__arrow--next"
        style={{
          background: "none",
          right: "-79.32px",
        }}
      >
        <img
          src="/img/explore-our-secrets/next.svg"
          alt="Next"
          className="w-[12px] md:w-auto"
        />
      </button>
    </div>
  );
};

export default Arrows;
