import { useRouter } from "next/router";

function SinglePortfolioPage() {
  const router = useRouter();
  function goHomepageHandler() {
    router.push("/");
  }
  return (
    <div>
      <h1>
        This is SinglePortfolioPage with ID : {router.query.id} with pathname :{" "}
        {router.pathname}
      </h1>
      <button onClick={goHomepageHandler}>Go HomePage</button>
    </div>
  );
}

export default SinglePortfolioPage;
