import './App.css';

function Elem(props)
{
  return (
    <p style={{ color: props.item.age <= 25 ? 'green' : 'red' }}>
      {props.item.name}, {props.formatAge(props.item.age)}, {props.item.city}
    </p>
  )
}

export function App2(props) 
{
return <p className='Gallery'>
   { props.products.map(elem=> <Elem item={elem} formatAge={props.formatAge}></Elem>) }    
    </p>
}


