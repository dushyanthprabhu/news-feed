import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Article } from "@/inerface";
import { Button } from "../ui/button";
import { getTimeDifference } from "@/utils";
import { useDispatch } from "react-redux";
import { updateRecentList } from "@/redux/newsfeedSlice";
interface ArticleCardProps {
  className?: string;
  article: Article;
}

export function ArticleCard({ className, ...props }: ArticleCardProps) {
  const dispatch = useDispatch();
  const { title, description, urlToImage, publishedAt, author, url } =
    props.article;

  const onViewClick = () => {
    dispatch(updateRecentList(props.article));
    window.open(url, "_blank");
  };

  return (
    <Card
      className={cn(
        "w-full bg-zinc-200 hover:shadow-zinc-700 flex flex-col justify-around rounded-md",
        className,
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-4 justify-center items-center flex-col">
        <div className="w-full aspect-square overflow-hidden rounded-md">
          <img src={urlToImage} className="w-full h-full object-cover" />
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex flex-col gap-5">
        <div className="w-full flex items-start justify-between mt-3 text-sm text-gray-500">
          <p className="flex items-center gap-1">
            <span className="font-normal text-gray-400">By</span>
            <span className="font-medium text-black">{author || "-"}</span>
          </p>

          <p className="text-gray-400">{getTimeDifference(publishedAt)}</p>
        </div>
        <Button
          className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-900 transition"
          onClick={onViewClick}
        >
          Read full article →
        </Button>
      </CardFooter>
    </Card>
  );
}
