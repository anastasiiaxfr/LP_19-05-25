import Image from "next/image";
import i1 from "@/app/assets/img/icons/i1.svg";
import i2 from "@/app/assets/img/icons/i2.svg";
import i3 from "@/app/assets/img/icons/i3.svg";

const services = [
  {
    icon: i1,
    title: "Security Guarantee",
    desc: "Your data and funds will be securely protected.",
  },
  {
    icon: i3,
    title: "Investing",
    desc: "Your data and funds will be securely protected.",
  },
  {
    icon: i2,
    title: "Multiple Method",
    desc: "Your data and funds will be securely protected.",
  },
];

function SectionServices() {
  return (
    <section className="section section_services">
      <div className="container">
        <h2 className="text-center">What do we offer?</h2>

        <div className="services">
          {services.map((i, ind) => (
            <div className="service" key={ind}>
              <div className="service_icon">
                <Image src={i.icon} alt={i.title} />
              </div>
              <div className="service_body">
                <h3 className="service_title">{i.title}</h3>
                <p className="service_desc">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionServices;
