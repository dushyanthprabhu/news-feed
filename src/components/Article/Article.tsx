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
        "w-[380px] bg-zinc-200 hover:shadow-zinc-700 flex flex-col justify-around",
        className
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-4 justify-center flex-col">
        <div className="flex flex-col gap-5">
          <img width="400px" height="400px" src={urlToImage}></img>
          <div className="flex justify-around">
            <p className="font-medium flex">
              <p className="font-thin">By</p> {author || "-"}
            </p>
            <p>{getTimeDifference(publishedAt)}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onViewClick}>
          View
        </Button>
      </CardFooter>
    </Card>
  );
}
