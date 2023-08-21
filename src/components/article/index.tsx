import React, { useEffect, useMemo, useState } from "react";
import Searching from "../../common/searching";
import Content from "./detail/content";
import Up from "@/common/up";
import { data } from "@/utils/article";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setArticle } from "@/store/article";
import ContentData from "./detail/contentdata";
import Pagination from "@/common/pagination";
import { popular } from "@/utils/article";
import toast from "react-hot-toast";

let PageSize = 8;

function ArticlePage() {
  const dispatch = useDispatch();
  const article = useSelector((state: RootState) => state.article.value);
  const [filter, setFilter] = useState("");
  const [filteredArticle, setFilteredArticle] = useState<any[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationEnabled, setPaginationEnabled] = useState(false);

  useEffect(() => {
    dispatch(setArticle(data));
  }, [dispatch]);

  const totalDisplayedArticles = submitted
    ? filteredArticle.length
    : article.length;

  const currentTableData = useMemo(() => {
    if (!paginationEnabled) {
      return submitted ? filteredArticle : article;
    }

    const firstItemIndex = (currentPage - 1) * PageSize;
    const lastItemIndex = firstItemIndex + PageSize;
    return filteredArticle.length > 0
      ? filteredArticle.slice(firstItemIndex, lastItemIndex)
      : article.slice(firstItemIndex, lastItemIndex);
  }, [paginationEnabled, currentPage, filteredArticle, article, submitted]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPaginationEnabled(true);
  };

  function handleFilterChange(e: any) {
    setFilter(e.target.value);
  }

  function handleFilterSubmit(e: any) {
    e.preventDefault();
    const filteredItems = article.filter((item: { title: string }) =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    );

    if (filteredItems.length === 0) {
      toast.error(`No Results: ${filter}`);
    } else {
      setFilteredArticle(filteredItems);
      setSubmitted(true);
      setCurrentPage(1);
    }
  }

  return (
    <>
      <Up />
      <Searching
        title="Artikel"
        about="Anda bisa mencari berita relevan kegiatan yang berkaitan dengan
        Klenthik pilih kategori sesuai pilihan anda"
        handleSubmit={handleFilterSubmit}
        filter={filter}
        handleFilter={handleFilterChange}
        filterData={filteredArticle}
      />

      {submitted ? (
        <ContentData filteredItems={currentTableData} />
      ) : (
        <Content filterData={currentTableData} popular={popular} />
      )}

      <Pagination
        currentPage={currentPage}
        totalCount={totalDisplayedArticles}
        pageSize={PageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default ArticlePage;
