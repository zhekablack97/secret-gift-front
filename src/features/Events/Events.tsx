"use client";

import { useGetEventsQuery } from "@/api/event/eventService";
import Image from "next/image";
import { FC } from "react";

export const Events: FC = () => {
  const { data } = useGetEventsQuery();

  console.log(data);
  return (
    <>
      {data?.data.map((event) => {
        return (
          <div key={event.id}>
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVICE_URL}${event.attributes.bgImage.data.attributes.formats.large.url}`}
              width={
                event.attributes.bgImage.data.attributes.formats.large.width
              }
              height={
                event.attributes.bgImage.data.attributes.formats.large.height
              }
              alt=""
            />
          </div>
        );
      })}
    </>
  );
};
