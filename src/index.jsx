import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
    return (
        <section className='booklist'>
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
    const img =
        "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg";
    const title = "Interesting Facts For Curious Minds";
    const author = "Jordan Moore  ";

    return (
        <article className='book'>
            <img src={img} alt='image'/>
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<BookList />);
