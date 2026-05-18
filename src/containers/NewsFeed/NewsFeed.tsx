import { Article } from "@/inerface";
import { ArticleCard } from "@/components/Article/Article";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Skeleton } from "@/components/ui/skeleton";

interface NewsFeedProps {}

function SkeletonCard() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-48 w-full rounded-xl" />
      <div className="flex flex-col gap-3">
        <Skeleton className="h-8 w-5/6" />
        <Skeleton className="h-8 w-4/6" />
      </div>
    </div>
  );
}

function NewsFeed({}: NewsFeedProps) {
  const articles = useSelector((state: RootState) => state.newsfeed.articles);
  const searchArticles = useSelector(
    (state: RootState) => state.searcharticle.searchArticles,
  );
  const searchKeyword = useSelector(
    (state: RootState) => state.searcharticle.searchKeyword,
  );
  const search = useSelector((state: RootState) => state.searcharticle.search);

  const getArticles = () => {
    if (search) {
      return searchArticles;
    } else {
      return articles;
    }
  };

  return (
    <div className="flex flex-col">
      {search && <p>Showing Results for {searchKeyword}</p>}
      <div className="grid gap-5 tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3">
        {searchArticles.length > 0 || articles?.length > 0
          ? getArticles()?.map((article: Article) => {
              return <ArticleCard article={article} />;
            })
          : Array.from({ length: 15 }).map((_, index) => {
              return <SkeletonCard key={index} />;
            })}
      </div>
    </div>
  );
}

export default NewsFeed;
