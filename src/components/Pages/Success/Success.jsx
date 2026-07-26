import { Link } from "react-router-dom";

function Success(){

return(

<div className="container">

<h1>

🎉 Thank You

</h1>

<p>

Your order has been placed successfully.

</p>

<Link to="/">

Back Home

</Link>

</div>

);

}

export default Success;