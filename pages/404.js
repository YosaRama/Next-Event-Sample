import { useRouter } from "next/router";
function NotFoundPage() {
  const router = useRouter();
  return (
    <div>
      <h1>404</h1>
      <h3>Page is Not Found!</h3>
      <button onClick={() => router.push("/")}>Go back to HomePage</button>
    </div>
  );
}

export default NotFoundPage;
