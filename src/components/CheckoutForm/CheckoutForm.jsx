import styles from "./CheckoutForm.module.css";

function CheckoutForm(){

return(

<form className={styles.form}>

<input
type="text"
placeholder="First Name"
/>

<input
type="text"
placeholder="Last Name"
/>

<input
type="text"
placeholder="Company (Optional)"
/>

<input
type="text"
placeholder="Country"
/>

<input
type="text"
placeholder="Street Address"
/>

<input
type="text"
placeholder="City"
/>

<input
type="text"
placeholder="ZIP Code"
/>

<input
type="text"
placeholder="Phone"
/>

<input
type="email"
placeholder="Email"
/>

<textarea
rows="5"
placeholder="Order Notes"
/>

</form>

)

}

export default CheckoutForm;