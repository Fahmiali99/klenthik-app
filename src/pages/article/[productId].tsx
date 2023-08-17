import ContentData from "@/components/article/detail/contentdata";

export const getServerSideProps = async (ctx: any) => {
  const { productId } = ctx.query;

  return {
    props: {
      productId,
    },
  };
};

export default ContentData;
