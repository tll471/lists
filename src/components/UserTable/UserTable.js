import './UserTable.css';

function Elem(props)
{
  return <p>{props.item.name}, {props.formatAge(props.item.age)}, {props.item.city}</p> 
}

export function UserTable(props) 
{
return <p className='Gallery'>
   { props.products.map(elem=> <Elem item={elem} formatAge={props.formatAge}></Elem>) }    
    </p>
}


