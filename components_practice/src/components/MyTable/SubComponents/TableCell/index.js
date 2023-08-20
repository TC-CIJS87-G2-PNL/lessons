const TableCell = ({col, row}) => {
    const value = col.keyData? row[col.keyData] : null
    return (
        <td>
            {
                col.render ? col.render(row) : value
            }
        </td>
    )
}

export default TableCell;