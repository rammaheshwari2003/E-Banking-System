import { useState } from "react";
import axios from "axios"; // Make sure to import axios
import BASE_URL from "../config/BaseURL";
import Table from 'react-bootstrap/Table';

const Statement = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let id = localStorage.getItem("id");
        let api = `${BASE_URL}/account/statement`;

        try {
            
            let response = await axios.get(api, {
                params: {
                    id: id,
                    startDate: startDate,
                    endDate: endDate
                }
            });
            
            setData(response.data.transactionID);
            
        } catch (error) {
            console.error("Error fetching statement:", error);
        }
    };

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    };

    // Check if `data` is an array and then map over it
    let history =data.map((key, index) => {
        return (
            <tr key={index}>
                <td>{formatDate(key.Date)}</td>
                <td>{key.description}</td>

                {key.transactionType === "credit" ? (
                    <td style={{ color: "green" }}>{key.amount}</td>
                ) : (
                    <td>-</td>
                )}

                {key.transactionType === "debit" ? (
                    <td style={{ color: "red" }}>{key.amount}</td>
                ) : (
                    <td>-</td>
                )}
            </tr>
        );
    });

    return (
        <>
            <div id="statement">
                <h1>Statement</h1>
                <h6>
                    Start Date : 
                    <input
                        type="date"
                        name="startDate"
                        onChange={(e) => setStartDate(e.target.value)}
                    /> 
                    &nbsp; &nbsp;  
                    End Date : 
                    <input
                        type="date"
                        name="endDate"
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    &nbsp; &nbsp; 
                    <button onClick={handleSubmit}>Search</button>
                </h6>

                <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Credit Amount</th>
                            <th>Debit Amount</th>
                        </tr>
                    </thead>
                    <tbody>{history}</tbody>
                </Table>
            </div>
        </>
    );
};

export default Statement;
