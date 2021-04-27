import { useRouter } from "next/router";

function SingleBlogPageWithoutId() {
  const router = useRouter();

  console.log(`query`, router.query);
  console.log(`pathname`, router.pathname);

  return (
    <div>
      <h1>This is SingleBlogPageWithoutId</h1>
    </div>
  );
}

export default SingleBlogPageWithoutId;
