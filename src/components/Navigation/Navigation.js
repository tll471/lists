import './Navigation.css';

function Elem2(props)
{

  const style = {color: props.item.id === props.activeId ? "green" : "red"}

  return <li style = {style}>
         {props.item.label} - {props.item.id}
        </li>
}

export function Navigation(props) 
{
return <ul>
   { props.products.map(elem=> <Elem2 item={elem} activeId={props.activeId}></Elem2>) }    
    </ul>
}


