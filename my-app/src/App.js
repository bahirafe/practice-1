import './App.css'
 const items=['item 1','item 2','item 3'];
function App(){
  return(
    <ul>
      {items.map((item,index)=>(
        <li key={index}>{item}

        </li>
      ))}
    </ul>
  );
}
export default  App;
//map() is used to render a list of <li> elements one for each item in the array 
// like the an array list out the item of the counter
// to deveelop componenet base ui