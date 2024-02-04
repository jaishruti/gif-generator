import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <div className="w-full h-screen background flex flex-col relative overflow-hidden items-center">
      <h1 className="absolute bg-white rounded-lg w-11/12 text-center mt-[40px] py-2 px-10 text-4xl font-bold mx-auto ">
        Random GIF
      </h1>
      <div>
        <Random />
        <Tag />
      </div>
    </div>
  );
}
