import ReactDOM from "react-dom/client";
import "./index.css";
import { Children } from "react";

const books = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    },
];

const BookList = () => {
    return (
        <section className="booklist">
            {books.map((book) => {
                const { author, title, img } = book;
                return (
                <Book {...book} />
                );
            })}
        </section>
    );
};

const Book = (props) => {
    console.log(props);
    const { author, title, img } = props;
    return (
        <article className="book">
            <img src={img} alt="images" />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<BookList />);
