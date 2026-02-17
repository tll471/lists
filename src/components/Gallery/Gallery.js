import './Gallery.css';

function Elem2(props)
{
  if (!props.item.url) 
    {
      return <li>Нет фото!</li>;
    }
  return <li>
        <p>{props.item.title}</p>
        <img src={props.item.url}/>
        <p>{props.item.author}</p>
        </li>
}

export function GalleryItem(props) 
{
  
return <ul className='Gallery'>
   { props.products.map(elem=> <Elem2 item={elem}></Elem2>) }    
    </ul>
}


