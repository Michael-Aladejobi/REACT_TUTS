import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";

const BookList = () => {
    return (
        <section className="booklist">
            {books.map((book, index) => {
                return (
                    <>
                        <Book {...book} key={index} />
                    </>
                );
            })}
        </section>
    );
};

const Book = (props) => {
    // console.log(props);
    const { author, title, img } = props;

    return (
        <article className="book">
            <img src={img} alt="images" />
            <h2>{title}</h2>
            <button>click me</button>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<BookList />);
