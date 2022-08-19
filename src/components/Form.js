import React from "react";

const Form = () => {
    return (
        <div>
            <h2>
                ADD NEW BOOK
            </h2>
            <form>
                <input type={text} placeholder='Book title'></input>
                <input type={text} placeholder='Author'></input>
                <button className="add">ADD BOOK</button>
            </form>
        </div>
    );
};

export default Form;