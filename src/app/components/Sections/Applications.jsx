import Image from "next/image";
import Link from "next/link";
import img from "@/app/assets/img/img1.webp";
import app1 from "@/app/assets/img/app1.svg";
import app2 from "@/app/assets/img/app2.svg";

function SectionApps() {
  return (
    <section className="section section_apps">
      <div className="container">
        <div className="row">
          <div>
            <h2>Easy Way to manage your finances</h2>
            <p className="subtitle mb-10">
              Easy to use mobile app that support on android and ios.
            </p>
            <div className="apps">
              <Link className="app" href="/" target="_blank">
                <Image src={app1} alt="" />
              </Link>
              <Link className="app" href="/" target="_blank">
                <Image src={app2} alt="" />
              </Link>
            </div>
          </div>
          <div>
            <Image src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionApps;
