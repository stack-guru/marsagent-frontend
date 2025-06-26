import HomeLeftSide from "./components/HomeLeftSide";
import Avatar from "./components/Avatar";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-[30px]">
      <HomeLeftSide />
      <Avatar />
    </div>
  );
}
