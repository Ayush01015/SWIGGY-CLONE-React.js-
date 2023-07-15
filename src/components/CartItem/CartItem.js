
import "./CartItem.css"

const CartItem = ({name}) =>{
    return(
        <div
        style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginTop:"1rem",
            border:"1px solid red",
        }}
        >
        <span>{name}</span>
        {console.log("name:: ",name)}
        </div>
    )
}

export default CartItem;