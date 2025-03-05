import { Article } from "@/inerface";
import { ArticleCard } from "@/components/Article/Article";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Skeleton } from "@/components/ui/skeleton";

interface NewsFeedProps {}

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

function NewsFeed({}: NewsFeedProps) {
  const articles = useSelector((state: RootState) => state.newsfeed.articles);
  const searchArticles = useSelector(
    (state: RootState) => state.searcharticle.searchArticles
  );
  const recentlyVie = useSelector(
    (state: RootState) => state.newsfeed.recentlyViewed
  );
  const searchKeyword = useSelector(
    (state: RootState) => state.searcharticle.searchKeyword
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
