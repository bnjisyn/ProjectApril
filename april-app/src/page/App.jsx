import { Link } from "react-router-dom";

function App() {
  return (
    <div className="h-screen bg-bluelinear flex flex-col justify-center">
      <div className="basis-3/4 flex flex-col justify-center">
        <div className="flex justify-center text-[36px] text-[#fff]">
          Bhusana
        </div>
        <div className="flex justify-center text-[#7B6F72]">
          Donate, share, inspire
        </div>
      </div>
      <div className="flex justify-center">
        <button type="button" className="bg-white rounded-full">
          <Link to="/login">
            <p className="font-bold px-8 py-3 text-[#95ADFE]">Get Started</p>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default App;
