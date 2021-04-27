import { useRouter } from "next/router";

function SingleBlogPage() {
  const router = useRouter();

  console.log(`query`, router.query);
  console.log(`pathname`, router.pathname);
  return (
    <div>
      <h1>This is SingleBlogPage</h1>
    </div>
  );
}

export default SingleBlogPage;
