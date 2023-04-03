import listStyle from './List.module.css'

const List = ({list}) => {
    return(
        <tr>
            {list.map((list) => (
                <h3 key={list.id}>{list.text}</h3>
            ))}
        </tr>
    )
}

export default List;