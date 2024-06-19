import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
    author: "John A Campbell",
    title: "Ghost Platoon",
    img: "https://m.media-amazon.com/images/I/41Wts36fLcL._AC_UL320_.jpg",
};

const secondBook = {
    author: "John B Campbell",
    title: "Ghost Platoon",
    img: "https://m.media-amazon.com/images/I/41Wts36fLcL._AC_UL320_.jpg",
};

function BookList() {
    return (
        <section className='booklist'>
            <Book
                author={firstBook.author}
                title={firstBook.title}
                img={firstBook.img}
            />
            <Book
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            />
        </section>
    );
}

const Book = (props) => {
    const { img, title, author } = props;
    console.log(props);
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
