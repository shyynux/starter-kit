import cover from "../src/assets/city.jpg";

const Home = () => {
  return (
    <div className="min-h-screen px-6 py-12 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <div className="space-y-3 font-mono">
            <p className="text-2xl font-semibold text-zinc-800 leading-snug">
              To start using the React + Tailwind + TypeScript starter kit
            </p>
            <p className="text-zinc-500 text-sm">
              Update the <code className="px-1 py-0.5 rounded text-xs font-mono">Home.tsx</code> file to see changes.
            </p>
            <p className="text-zinc-500 text-sm">
                you need to add your routes in App.tsx
            </p>
            <p className="text-zinc-500 text-sm">
                add your images in the assets folder and import them in the components
            </p>
          </div>
        </div>

        <div>
          <img
            src={cover}
            alt="City"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
