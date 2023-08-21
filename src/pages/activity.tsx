import React, { useMemo, useState } from "react";
import Layout from "@/common/layout";
import Up from "@/common/up";
import { getPostMetadata } from "@/common/getPostMetadata";
import ActivityPage from "@/components/activity";
import Searching from "@/common/searching";
import Pagination from "@/common/pagination";
import toast from "react-hot-toast";

const PageSize = 6;
function Activity({ postMetadata }: any) {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredArticle, setFilteredArticle] = useState<any[]>([]);

  function handleFilterChange(e: any) {
    setFilter(e.target.value);
  }

  const totalCount = filter ? filteredArticle.length : postMetadata.length;

  const currentTableData = useMemo(() => {
    const firstItemIndex = (currentPage - 1) * PageSize;
    const lastItemIndex = firstItemIndex + PageSize;
    return filteredArticle.length > 0
      ? filteredArticle.slice(firstItemIndex, lastItemIndex)
      : postMetadata.slice(firstItemIndex, lastItemIndex);
  }, [currentPage, filteredArticle, postMetadata]);

  function handleFilterSubmit(e: any) {
    e.preventDefault();
    const filteredItems = postMetadata.filter((item: { title: string }) =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    );
    if (filteredItems.length === 0) {
      toast.error(`No Results: ${filter}`);
    } else {
      setFilteredArticle(filteredItems);
      setCurrentPage(1);
    }
  }

  return (
    <Layout>
      <div>
        <Up />
        <Searching
          title="Gallery Kegiatan"
          about="Anda bisa mencari berita relevan kegiatan yang berkaitan dengan Klenthik pilih kategori sesuai pilihan anda"
          handleSubmit={handleFilterSubmit}
          filter={filter}
          handleFilter={handleFilterChange}
          filterData={filteredArticle}
        />
        <div className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center pb-10">
            {currentTableData?.map((item: any, idx: any) => (
              <ActivityPage
                key={idx}
                slug={item.slug}
                image={item.image}
                title={item.title}
                date={item.date}
              />
            ))}
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const postMetadata = getPostMetadata();
  return {
    props: {
      postMetadata,
    },
  };
}

export default Activity;
