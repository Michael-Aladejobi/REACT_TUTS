import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
    return (
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => (
    <img
        src='https://m.media-amazon.com/images/I/41Wts36fLcL._AC_UL320_.jpg'
        alt='Ghost Platoon'
    />
);
const Title = () => <h2>Ghost Platoon </h2>;
const Author = () => <h4>John C Campbell </h4>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
