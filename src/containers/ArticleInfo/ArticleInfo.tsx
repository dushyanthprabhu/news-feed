import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Suggestion from "@/components/Suggestion/Suggestion";

interface ArticleInfoProps {
  className?: string;
}

function ArticleInfo({ className, ...props }: ArticleInfoProps) {
  const { title, description, urlToImage } = useSelector(
    (state: RootState) => state.newsfeed.article
  );

  return (
    <>
      <Card className={cn(className)} {...props}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <img width="400px" height="400px" src={urlToImage}></img>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Suggestion />
    </>
  );
}

export default ArticleInfo;
