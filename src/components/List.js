import listStyle from './List.module.css'

const List = ({list}) => {
    return(
        <tr className={listStyle}>
            {list.map((list) => (
                <td>
                    <h3 key={list.id}>{list.text}
                        <h4>{list.day}</h4>
                    </h3>
                    <img className={listStyle.img} src={list.img} alt=''></img>
                </td>
            ))}
        </tr>
    )
}

export default List;