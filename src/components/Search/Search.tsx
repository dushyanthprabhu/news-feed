import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Input } from "../ui/input";
import { Article } from "@/inerface";
import { useEffect, useState } from "react";
import { searchArticles } from "@/api/api";
import { updateSelectedArticle } from "@/redux/newsfeedSlice";
import {
  setSearch,
  setSearchKeyWord,
  updateSearchList,
} from "@/redux/searcharticleSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface SearchProps {}

function Search({}: SearchProps) {
  const [articles, setArticles] = useState<Article[]>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {});

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyWord = event.target.value;
    let newArticles: Article[] = [];
    dispatch(setSearchKeyWord(keyWord));
    if (keyWord == "") {
      setArticles([]);
      dispatch(updateSearchList(newArticles));
      return;
    } else {
      newArticles = await searchArticles(keyWord || "");
      dispatch(updateSearchList(newArticles));
    }
    newArticles = Object.values(newArticles).slice(0, 10);
    if (Object.entries(newArticles).length != 0) {
      setArticles(newArticles);
    }
  };

  const onItemClick = async (article: Article) => {
    setArticles([]);
    dispatch(updateSelectedArticle(article));
    navigate("/view");
  };

  const onSearch = () => {
    dispatch(setSearch());
    navigate("/");
  };

  return (
    <>
      <Sheet>
        <SheetTrigger className="text-base font-semibold">SEARCH</SheetTrigger>
        <SheetContent side={"top"} className="bg-zinc-200">
          <SheetHeader>
            <SheetTitle>Search for the latest news</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col">
            <div className="flex w-full justify-center items-center">
              <Input
                prefix="test"
                className="my-4 w-3/4 py-5 px-10"
                type="text"
                placeholder="Search"
                onChange={onChange}
              />
              <SheetClose>
                <Button onClick={onSearch}>Search</Button>
              </SheetClose>
            </div>
            <div className="flex flex-col justify-center items-center">
              {articles &&
                articles?.map((article: Article) => {
                  return (
                    <SheetClose className="w-3/4 hover:bg-zinc-300 p-2 cursor-pointer">
                      <p
                        className="w-3/4"
                        onClick={() => {
                          onItemClick(article);
                        }}
                      >
                        {article.title}
                      </p>
                      <p>By {article.author}</p>
                    </SheetClose>
                  );
                })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Search;
