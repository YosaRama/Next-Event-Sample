import Link from "next/link";

function HomePage() {
  const portfolio = [
    {
      id: "Maxi",
      name: "Maximum",
    },
    {
      id: "Min",
      name: "Minimum",
    },
  ];
  return (
    <div>
      <h1>This is HomePage</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about"> About</Link>
          </li>
          <li>
            <Link href="/portfolio"> Portfolio</Link>
          </li>
          {portfolio.map((item) => (
            <li key={item.id}>
              <Link
                href={{ pathname: "/portfolio/[id]", query: { id: item.name } }}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/about"> About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
