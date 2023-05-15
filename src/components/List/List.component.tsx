
interface IProps {
    people: {
        name: string
        age: number
        url: string
        notes?: string
    }[]
}

const List: React.FC<IProps> = ({ people }) => {
    return (
        <div>List</div>
    )
}

export default List