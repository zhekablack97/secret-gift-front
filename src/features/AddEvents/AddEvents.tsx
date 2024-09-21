"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib";
import { EventPost, EventTypeField } from "@/types/EventsType";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ImageUpload } from "../ImageUpload";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const eventTypeFieldSchema: EventTypeField[] = ["custom", "secret-santa"];

//ts-ignore
const eventPostSchema: any = Yup.object().shape({
  data: Yup.object().shape({
    bgImage: Yup.number().required("Background image is required"),
    event_type: Yup.mixed()
      .oneOf(
        eventTypeFieldSchema,
        "Event type must be either 'custom' or 'santa'"
      )
      .required("Background image is required"),
    name: Yup.string().required("Event name is required"),
    icon: Yup.number().required("Icon is required"),
    budget: Yup.number()
      .min(0, "Budget must be a positive number")
      .required("Budget is required"),
    users_permissions_users: Yup.array()
      .of(Yup.string().required("User is required"))
      .min(1, "At least one user is required")
      .required("Users permissions are required"),
    location: Yup.string().required("Location is required"),
    reminder: Yup.boolean().required("Reminder is required"),
    date_purchase_gifts: Yup.date().required("Purchase date is required"),
    date_gift_delivery: Yup.date().required("Delivery date is required"),
    locale: Yup.string().required("Locale is required"),
  }),
});

export const AddEvents: FC = () => {
  const [imgMetaData, setImgMetaData] = useState<{
    id: number;
    url: string;
    width: number;
    height: number;
  } | null>(null);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    setValue,
  } = useForm<EventPost>({
    resolver: yupResolver(eventPostSchema),
  });

  const handleUpdateBg = (
    id: number,
    url: string,
    width: number,
    height: number
  ) => {
    setImgMetaData({
      id,
      url,
      width,
      height,
    });
    setValue("data.bgImage", id);
  };
  return (
    <Dialog>
      <DialogTrigger>Создать мероприятие </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <form>
              <div>
                <ImageUpload onSuccess={handleUpdateBg} />
                {imgMetaData?.url && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SERVICE_URL}${imgMetaData?.url}`}
                    width={imgMetaData.width}
                    height={imgMetaData.height}
                    alt={""}
                  />
                )}
              </div>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Input
                      type="text"
                      placeholder="Название мероприятия"
                      onBlur={onBlur}
                      onChange={onChange}
                      className={cn(
                        errors.root || errors.data?.name ? "border-red-600" : ""
                      )}
                      value={value}
                    />
                    <span className="text-red-600">
                      {errors.data?.name?.message}
                    </span>
                  </>
                )}
                name="data.name"
              />
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <span>Тип мероприятия</span>

                    <Select onValueChange={onChange} value={value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Выберете тип мероприятия" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom">custom</SelectItem>
                        <SelectItem value="secret-santa">
                          secret-santa
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-red-600">
                      {errors.data?.name?.message}
                    </span>
                  </>
                )}
                name="data.event_type"
              />
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <Input
                      type="text"
                      placeholder="Бюджет"
                      onBlur={onBlur}
                      onChange={onChange}
                      className={cn(
                        errors.root || errors.data?.name ? "border-red-600" : ""
                      )}
                      value={value}
                    />
                    <span className="text-red-600">
                      {errors.data?.name?.message}
                    </span>
                  </>
                )}
                name="data.budget"
              />
              <Button>Создать мероприятие</Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
