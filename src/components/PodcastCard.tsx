import React from "react";
import Image from "next/image";

const PodcastCard = ({
  imgUrl,
  title,
  desc,
  podID,
}: {
  imgUrl: string;
  title: string;
  desc: string;
  podID: number;
}) => {
  return (
    <div className="cursor-point">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgUrl}
          width={174}
          height={174}
          alt={title}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-16 truncate font-normal text-white-1 capitalize">
            {desc}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
