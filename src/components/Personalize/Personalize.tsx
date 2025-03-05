import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { PersonalizeForm } from "@/inerface";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromPersonalizeList,
  updatePersonalizeList,
} from "@/redux/newsfeedSlice";
import { RootState } from "@/redux/store";
interface PersonalizeProps {}

function Personalize({}: PersonalizeProps) {
  const [formData, setFormData] = useState<PersonalizeForm>({
    author: "",
    source: "",
    category: "",
  });
  const personalizeFeeds = useSelector(
    (state: RootState) => state.newsfeed.personalizeFeeds
  );
  const [edit, setEdit] = useState<boolean>(false);
  const dispath = useDispatch();

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(personalizeFeeds);

  const onAddClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    dispath(updatePersonalizeList(formData));
  };

  const onEditClick = () => {
    setEdit(true);
  };

  const onRemoveClick = (index: number) => {
    let newFeed = [...personalizeFeeds];
    newFeed.splice(index, 1);
    dispath(removeFromPersonalizeList(newFeed));
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className="text-base font-semibold">
          PERSONALIZE
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Personalize Feed</DialogTitle>
            <DialogDescription>
              Fill Required Details to Personalize Your News Feed
            </DialogDescription>
          </DialogHeader>
          {!edit ? (
            <div className="flex  justify-center gap-3 items-center flex-col">
              <Input
                prefix="test"
                className="py-5 px-10"
                type="text"
                name="source"
                placeholder="Source"
                onChange={onChange}
              />
              <Input
                prefix="test"
                className="py-5 px-10"
                type="text"
                name="category"
                placeholder="Category"
                onChange={onChange}
              />
              <Input
                prefix="test"
                className="py-5 px-10"
                type="text"
                name="author"
                placeholder="Author"
                onChange={onChange}
              />
              <div className="flex gap-2 w-full">
                <Button
                  className="hover:bg-zinc-300 w-full"
                  type="button"
                  variant="secondary"
                  onClick={onEditClick}
                >
                  Edit
                </Button>
                <DialogClose asChild>
                  <Button
                    className="hover:bg-zinc-300 w-full"
                    type="button"
                    variant="secondary"
                    onClick={onAddClick}
                  >
                    Add
                  </Button>
                </DialogClose>
              </div>
              <DialogClose asChild>
                <Button
                  className="hover:bg-zinc-300 w-full"
                  type="button"
                  variant="secondary"
                >
                  Close
                </Button>
              </DialogClose>
            </div>
          ) : (
            <div className="flex  justify-center gap-3 items-center flex-col">
              {personalizeFeeds?.map((item: PersonalizeForm, index: number) => {
                return (
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div>{item.author}</div>
                      <div>{item.category}</div>
                      <div>{item.source}</div>
                    </div>
                    <div>
                      <Button
                        className="hover:bg-zinc-300 w-full"
                        type="button"
                        variant="secondary"
                        onClick={() => {
                          onRemoveClick(index);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                );
              })}
              <Button
                className="hover:bg-zinc-300 w-full"
                type="button"
                variant="secondary"
                onClick={() => {
                  setEdit(false);
                }}
              >
                Add New
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Personalize;
