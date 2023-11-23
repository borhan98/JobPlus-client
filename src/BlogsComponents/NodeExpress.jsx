const NodeExpress = () => {
  return (
    <div className="space-y-6 text-zinc-600">
      <h2 className="text-xl md:text-3xl font-semibold md:font-bold border-l px-2 py-4 bg-base-200 rounded">
        What is express js? What is Nest JS?
      </h2>
      {/* Express JS */}
      <div>
        <h3 className={"text-xl md:text-2xl font-medium mb-4"}>Epress JS</h3>
        <div className="space-y-4">
          <p className="text-sm md:text-base">
            Express.js is an web and mobile application framework for node.js.
            Is simplifies the process of building web and mobile applications by
            providing so many features.
          </p>
        </div>
      </div>
      <div>
        <h3 className={"text-xl md:text-2xl font-medium mb-4"}>Node JS</h3>
        <div className="space-y-4">
          <p className="text-sm md:text-base">
            {/* Explain node js */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NodeExpress;
