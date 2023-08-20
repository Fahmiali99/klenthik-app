import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";

interface ActivityProps {
  date: string;
  image: string;
  title: string;
  slug: string;
}

function ActivityPage(props: ActivityProps) {
  const { slug, image, title, date } = props;
  return (
    <div className="rounded-2xl ">
      <Link href={`/activity/${slug}`}>
        <div className="rounded-2xl">
          <Image
            className="rounded-2xl w-full h-48 sm:h-72 lg:h-48"
            src={image}
            width={100}
            height={100}
            alt=""
          />
          <div className="py-5">
            <h5 className="text-xl w-full lg:w-3/4 tracking-tight text-primary-dark dark:text-white">
              {title}
            </h5>
            <p className="text-secondary pt-2">
              {format(parseISO(date), "MMMM dd, yyyy")}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ActivityPage;
