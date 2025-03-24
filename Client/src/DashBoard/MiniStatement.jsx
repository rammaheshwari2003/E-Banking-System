import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config/BaseURL";
import Table from 'react-bootstrap/Table';

const MiniStatement = () => {
    const [data, setData] = useState([]);


    const Data = async () => {
        let id = localStorage.getItem("id");
        let api = `${BASE_URL}/account/miniStatement?id=${id}`;
        let response = await axios.get(api);
        setData(response.data.transactionID);
        console.log(response.data.transactionID);
    };

    useEffect(() => {
        Data();
    }, []);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    };

    let history = data.map((key) => {
        return (
            <tr>
                <td>{formatDate(key.Date)}</td> 
                <td>{key.description}</td>

          {key.transactionType === "credit" ? (<td style={{ color: "green" }}>{key.amount}</td>) : (<td>-</td>)}
          {key.transactionType === "debit" ? (<td style={{ color: "red" }}>{key.amount}</td>) : (<td>-</td>)}
        </tr>
        );
    });

    return (
        <>
            <div id="ministatement">
                <h1>Mini Statement</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Credit Amount</th>
                            <th>Debit Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default MiniStatement;
