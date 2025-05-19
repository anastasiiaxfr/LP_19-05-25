import Link from "next/link";
import Image from "next/image";
import img from "../../assets/img/logo.svg";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={img} alt="GreenBank" />
    </Link>
  );
}
