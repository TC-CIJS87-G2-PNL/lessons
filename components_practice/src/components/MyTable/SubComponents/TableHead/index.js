const TableHead = ({columns}) => {
    return (
        <tr>
            {
                columns ? columns.map(col => 
                    <th>{col.title}</th>    
                ) : null
            }
        </tr>
    )
}

export default TableHead;