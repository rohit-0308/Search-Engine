import HeaderOptionItems from "./HeaderOptionItems";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base
    lg:justify-start lg:space-x-36 lg:pl-52 border-b" >
      <div className="flex space-x-6 ">
        <HeaderOptionItems Icon={SearchIcon} title="All" selected />
        <HeaderOptionItems Icon={PhotographIcon} title="Images" />
        <HeaderOptionItems Icon={PlayIcon} title="Videos" />
        <HeaderOptionItems Icon={NewspaperIcon} title="News" />
        <HeaderOptionItems Icon={MapIcon} title="Maps" />
        <HeaderOptionItems Icon={DotsVerticalIcon} title="More" />
      </div>

      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
