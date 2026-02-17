import './UserRow.css';

function Elem2(props)
{
  if(!props.item.name || !props.item.age || !props.item.city)
  {
    return <p>текст пуст!</p>
  }
  return <p>{props.item.name}, {props.item.age}, {props.item.city}</p> 
}

export function UserRow(props) 
{
return <tr className='Gallery'>
   { props.products.map(elem=> <Elem2 item={elem}></Elem2>) }    
    </tr>
}


