import TableCell from "../TableCell";

const TableRow = ({data, columns}) => {
    console.log(data, columns)

    return (
        <>
            {
            data.map((row) => 
                <tr>
                    {
                        columns.map(col => 
                            <TableCell col={col} row={row} />    
                        )
                    }
                </tr>
            )}
        </>
    )
}

export default TableRow;