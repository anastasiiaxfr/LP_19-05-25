import Image from "next/image";
import ava1 from "@/app/assets/img/comments/ava1.webp";
import ava2 from "@/app/assets/img/comments/ava2.webp";
import ava3 from "@/app/assets/img/comments/ava3.webp";
import quote from "@/app/assets/img/icons/quote.svg";

const comments = [
  {
    ava: ava1,
    name: "Hadid Khan",
    info: "UIUX Designer",
    comment:
      "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
  },
  {
    ava: ava2,
    name: "Wade Warren",
    info: "Web Designer",
    comment:
      "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.",
  },
  {
    ava: ava3,
    name: "Jenny Wilson",
    info: "Trust Administrator",
    comment:
      "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ",
  },
];

function Comments() {
  return (
    <section className="section section_comments">
      <div className="container">
        <div className="comments">
          {comments.map((i, ind) => (
            <div className="comment" key={ind}>
              <div className="comment_icon">
                <Image src={quote} alt="quote" />
              </div>
              <div className="comment_body">{i.comment}</div>
              <div className="comment_auth">
                <Image src={i.ava} alt={i.name} className="comment_auth_ava" />
                <div className="comment_auth_body">
                  <p className="comment_auth_title">
                    <b>{i.name}</b>
                  </p>
                  <p className="comment_auth_label">{i.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Comments;
