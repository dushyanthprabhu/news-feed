import { PersonalizeForm } from "@/inerface";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Skeleton } from "../ui/skeleton";

interface RecentFeedProps {}

function SkeletonCard() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-5 w-4/5" />
      <Skeleton className="h-5 w-3/5" />
    </div>
  );
}

function RecentFeed({}: RecentFeedProps) {
  const personalizeFeeds = useSelector(
    (state: RootState) => state.newsfeed.personalizeFeeds,
  );

  return (
    <>
      <div className="w-1/5 mx-2 rounded-md hidden flex-col gap-4 justify-start items-start mobile:flex">
        <p className="text-xl">Recent Activity</p>
        <div className="w-full flex flex-col gap-4 justify-start">
          {personalizeFeeds?.map((feed: PersonalizeForm) => {
            return <div>{feed.author}</div>;
          })}
          {Array.from({ length: 5 }).map((_, index) => {
            return <SkeletonCard key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default RecentFeed;
