import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
    {
        author: "John A Campbell",
        title: "Ghost Platoon",
        img: "https://m.media-amazon.com/images/I/41Wts36fLcL._AC_UL320_.jpg",
        id: 1,
    },

    {
        author: "John B Campbell",
        title: "Ghost Platoon",
        img: "https://m.media-amazon.com/images/I/41Wts36fLcL._AC_UL320_.jpg",
        id: 2,
    },
];

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

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                const { img, title, author, id } = book;
                return <Book img={img} title={title} author={author} id={id} />;
            })}
        </section>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
