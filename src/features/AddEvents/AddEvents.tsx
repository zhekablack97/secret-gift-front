import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EventPost } from "@/types/EventsType";
import { FC } from "react";
import { useForm } from "react-hook-form";

export const AddEvents: FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<EventPost>();
  return (
    <Dialog>
      <DialogTrigger>Создать мероприятие </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
