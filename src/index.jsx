import ReactDOM from "react-dom/client";
import "./index.css"

const img =
    "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg";
const title = "Interesting Facts For Curious Minds";
const author = "Jordan Moore  ";

const BookList = () => {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
        </article>
    );
};
const Image = () => {
    return <img src={img} alt='img placeholder' />;
};
const Title = () => {
    return <h2>{title}</h2>;
};
const Author = () => {
    return <h4>{author}</h4>;
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<BookList />);