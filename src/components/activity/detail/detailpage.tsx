import React from "react";
import Markdown from "markdown-to-jsx";
import { format, parseISO } from "date-fns";

interface ActivityProps {
  date: string;
  image: string;
  title: string;
  slug: string;
  company: string;
  content: any;
}

function DetailPage(props: ActivityProps) {
  const { image, title, date, company, content } = props;

  return (
    <div>
      <div className="pt-10 container mx-auto px-4 sm:px-4 md:px-4 lg:px-0">
        <div className="rounded-2xl flex justify-center">
          <div
            className="relative w-full lg:w-3/5 h-64 flex justify-center items-center rounded-2xl"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" />
            <div className="z-10 text-center text-white">
              <h1 className="px-2 lg:px-5 text-2xl font-semibold md:text-2xl lg:text-3xl text-slate-600">
                {title}
              </h1>
              <p className="text-slate-400 mt-2 pt-2">
                {company} / {format(parseISO(date), "dd MMMM , yyyy")}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:justify-center pb-10 text-justify">
          <article className="prose">
            <Markdown>{content}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
