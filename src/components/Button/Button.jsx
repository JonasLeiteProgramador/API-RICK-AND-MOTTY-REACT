

export const Button = ({handleFunction,  color , title}) =>{

    return (
        
        <button className="btn" onClick={handleFunction} style={{color}}>{title}</button>
    )
   
}