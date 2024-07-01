import ReactDOM from "react-dom/client";

const img = "./ai.png";
const title = "TITLE";
const author = "AUTHOR";

const BookList = () => {
    return (
        <section>
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article>
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
    return <h2>{author}</h2>;
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<BookList />);
