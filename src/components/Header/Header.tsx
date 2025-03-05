import Search from "../Search/Search";
import { newsIcon } from "../../assets/assets";
import Menu from "../Menu/Menu";
import Personalize from "../Personalize/Personalize";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "@/redux/searcharticleSlice";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = () => {
    dispatch(setSearch());
    navigate("/");
  };
  return (
    <>
      <div className="static top-0 bg-zinc-400 w-full flex tablet:flex-col laptop:flex-row justify-between  px-16 py-8">
        <h1
          onClick={redirect}
          className="flex tablet:flex-col laptop:flex-row gap-4 text-xl font-bold justify-center items-center"
        >
          <img src={newsIcon} width="45px" height="45px" />
          Your Daily News Feed
        </h1>
        <div className="flex justify-center items-center gap-10">
          <Search />
          <h4 className="text-base font-semibold cursor-pointer p-1">ABOUT</h4>
          <Personalize />
          <Menu />
        </div>
      </div>
    </>
  );
}

export default Header;
