import { useState } from "react";
import { postDataToServer } from '../service/service';

function AddExpense(props) {
    const [payeeName, setPayeeName] = useState("");
    const [price, setPrice] = useState();
    const [product, setProduct] = useState("");
    const [setDate, setSetDate] = useState("05-04-2022");

    const handlePayeeChange = (e) => {
        setPayeeName(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(parseInt(e.target.value));
    }
    const handleProductChange = (e) => {
        setProduct(e.target.value);
    }
    const handleDateChange = (e) => {
        setSetDate(e.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = {
            payeeName,
            product,
            price,
            setDate
        }
        const data = await postDataToServer(response);
        props.onTrue();
    }

    return (
        <section>
             <header style={{ backgroundColor: "rgb(220, 233, 149)" }}>
                <h1>Add New Items</h1>
                <p>Read the below instructions before proceeding
                    <br></br>
                    Make sure you fill the fields where * is provided
                </p>
            </header>
            <form onSubmit={handleSubmit}>
                <article>
                    <p>Name: </p>
                    <select required value={payeeName} onChange={handlePayeeChange}>

                        <option value="" defaultChecked>Choose</option>
                        <option value="Rahul">Rahul</option>
                        <option value="Ramesh">Ramesh</option>
                    </select>
                </article>

                <article>
                    <p>Product Purchased: </p>
                    <input type="text" required value={product} onChange={handleProductChange}></input>
                </article>

                <article>
                    <p>Price: </p>
                    <input type="number" required value={price} onChange={handlePriceChange}></input>
                </article>

                <article>
                    <p>Date: </p>
                    <input type="date" required value={setDate} onChange={handleDateChange}></input>
                </article>
                
                <button onClick={props.onClose} className="form-button">Close</button>
<button type="submit" className="form-button">Submit</button>

            </form>
        </section>
    )
}

export default AddExpense;