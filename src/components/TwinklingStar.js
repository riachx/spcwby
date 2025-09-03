function TwinklingStar({ marginLeft, marginTop }) {
  return (
    <div
      style={{
        zIndex: '-5',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: marginLeft,
        marginTop: marginTop,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1274.73 657.71"
        width="60vh"
      >
        <style>
          {`
              @keyframes twinkle {
                0%, 100% { opacity: 1; transform: scale(0); transform: rotate(-10deg)}
                50% { opacity: 0.2; transform: scale(1); transform: rotate(10deg)}
              }
  
              .twinkle-star {
                transform-origin: 85% 50%;
                animation: twinkle 2s infinite;
                stroke: #f4f4f4;
                stroke-miterlimit: 10;
                stroke-width: 2;
                fill: #f4f4f4;
              }
            `}
        </style>
        <path
          d="M986.91 359.7h74.28c8.02 0 15.72-3.19 21.39-8.86l4.78-4.78a30.262 30.262 0 0 0 8.86-21.39V212.29v112.38c0 8.02 3.19 15.72 8.86 21.39l7.78 7.78a30.262 30.262 0 0 0 21.39 8.86h81.49-81.49c-8.02 0-15.72 3.19-21.39 8.86l-7 7a30.262 30.262 0 0 0-8.86 21.39v82.33-83.85c0-7.12-2.51-14-7.08-19.45l-7.12-8.48a30.244 30.244 0 0 0-23.17-10.8h-72.71Z"
          className="twinkle-star"
        />
      </svg>
    </div>
  );
}

export default TwinklingStar;
