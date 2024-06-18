export default function PrintBill() {
    return (<div style={{ width: '100vw', height: '100vh', backgroundColor: 'white', padding: '20px' }}>
        <style>
            {`
                    table {
                        width: 80%;
                        margin: 0 auto;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 10px;
                    }
                    .no-border {
                        border: none;
                    }
                `}
        </style>
        <table width="80%"  align="center" cellPadding={10}>
            <thead>
                <tr>
                    <td colSpan={4}>
                        <p align="right">
                            <button type="button" onclick="window.print();">Print</button>
                        </p>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td width="25%">id</td>
                    <td width="25%" />
                    <td width="25%">Customer id</td>
                    <td width="25%" />
                </tr>
                <tr>
                    <td width="25%">Date</td>
                    <td width="25%" />
                    <td width="25%">Name</td>
                    <td width="25%" />
                </tr>
                <tr>
                    <td width="25%">Status</td>
                    <td width="25%">
                        Dispatched
                    </td>
                    <td width="25%">Address</td>
                    <td width="25%" />
                </tr>
                <tr>
                    <td width="25%">Amount</td>
                    <td width="25%" />
                    <td width="25%">City Pincode</td>
                    <td width="25%" />
                </tr>
                <tr>
                    <td width="25%">Payment Status</td>
                    <td width="25%" />
                    <td width="25%">Remarks</td>
                    <td width="25%" />
                </tr>
            </tbody>
        </table>
        <table width="80%" border={1} align="center" cellPadding={10}>
            <thead>
                <tr>
                    <th>Sr</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>IPhone</td>
                    <td>125000</td>
                    <td>2</td>
                    <td>250000</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={4}>Total</th>
                    <th>250000</th>
                </tr>
            </tfoot>
        </table>
    </div>
    );
}