import ReactDOM from "react-dom/client";

const Ett = () => {
    return <>
        <Div1 />
        <Div1 />
    </>;
};

const Div1 = () => {
    return (
        <h1>
            <div>div 1</div>
        </h1>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Ett />);
