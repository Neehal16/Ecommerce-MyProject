export function App(){
    let arr=['Html','css','JS','Bootstrap','React']
    return(
    <div>
        <h2>Skills:</h2>
        <select>
    
            <option>Html</option>
            <option>Css</option>
            <option>JS</option>
            <option>Bootstrap</option>
            <option>React</option>
        </select>
         
    
        <br />
    
        <h2>Front-End:</h2>
        <select>
            {arr.map((item)=>(
                <option>{item}</option>
            ))}
           
        </select>
    </div>
    )
    }