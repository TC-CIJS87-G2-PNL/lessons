import MyTable from "../../components/MyTable";

/**
 * 1 -> male
 * 0 -> female
 */
const demoData = [
    {
        id: 'emp1',
        fullName: 'Nguyen Van A',
        birthYear: 2000,
        gender: 1,
        salary: 1000
    },
    {
        id: 'emp2',
        fullName: 'Nguyen Van B',
        birthYear: 1999,
        gender: 1,
        salary: 1000
    },
    {
        id: 'emp3',
        fullName: 'Nguyen Van D',
        birthYear: 1996,
        gender: 1
    },
    {
        id: 'emp4',
        fullName: 'Nguyen Van C',
        birthYear: 2001,
        gender: 0
    },
    {
        id: 'emp5',
        fullName: 'Nguyen Van E',
        birthYear: 2000,
        gender: 0
    }
]
const Employee = () => {
    const columns = [
        {
            title: 'ID',
            keyData: 'id',
        },
        {
            title: 'Năm sinh',
            keyData: 'birthYear',
        },
        {
            title: 'Họ và tên',
            keyData: 'fullName',
        },
        {
            title: 'Giới tính',
            keyData: 'gender',
        },
        {
            title: 'Lương',
            keyData: 'salary',
        },
        {
            title: 'Thao tác',
            render: (row) => {
                return <button onClick={() => alert(JSON.stringify(row))}>Edit</button>
            }
        }
    ]
    return (
        <MyTable data={demoData} columns={columns} />
    )
}

export default Employee;