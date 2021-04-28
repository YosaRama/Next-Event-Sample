import Link from "next/link";

function AddButton(props) {
  return (
    <Link href={props.link}>
      <a className="">{props.children}</a>
    </Link>
  );
}

export default AddButton;
