import Image from "next/image";
import b1 from "@/app/assets/img/brands/b1.png";
import b2 from "@/app/assets/img/brands/b2.png";
import b3 from "@/app/assets/img/brands/b3.png";
import b4 from "@/app/assets/img/brands/b4.png";
import b5 from "@/app/assets/img/brands/b5.png";
import b6 from "@/app/assets/img/brands/b6.png";

const brands = [b1, b2, b3, b4, b5, b6];

function Brands() {
  return (
    <section className="section section_brands">
      <div className="container">
        <div className="brands">
          <div className="brands_inner">
            {brands.map((i, ind) => (
              <Image key={ind} src={i} alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
