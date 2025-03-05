import { PersonalizeForm } from "@/inerface";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

interface RecentFeedProps {}

function RecentFeed({}: RecentFeedProps) {
  const personalizeFeeds = useSelector(
    (state: RootState) => state.newsfeed.personalizeFeeds
  );

  console.log(personalizeFeeds);

  return (
    <>
      <div className="bg-zinc-300 w-72">
        Feed Based on Choice
        {personalizeFeeds?.map((feed: PersonalizeForm) => {
          return <div>{feed.author}</div>;
        })}
      </div>
    </>
  );
}

export default RecentFeed;
