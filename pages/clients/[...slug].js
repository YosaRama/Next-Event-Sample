import { useRouter } from "next/router";

function ClientsPage() {
  const router = useRouter();

  console.log(`query`, router.query);
  console.log(`pathname`, router.pathname);

  return (
    <div>
      <h1>This is ClientsPage</h1>
    </div>
  );
}

export default ClientsPage;
