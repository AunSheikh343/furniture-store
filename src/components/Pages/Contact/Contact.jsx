import styles from "./Contact.module.css";

function Contact() {
    return (
        <section className={styles.contact}>
            <div className="container">
                <div className={styles.contact__grid}>
                    <div className={styles.contact__hero}>
                        <h1>Contact our team</h1>
                        <p>
                            Have a question about an order, need help with
                            measurements, or want a custom furniture quote? Send
                            us a message and we’ll reply within one business day.
                        </p>

                        <div className={styles.contact__details}>
                            <div className={styles.contact__detail}>
                                <h3>Email</h3>
                                <p>support@furnilux.com</p>
                            </div>
                            <div className={styles.contact__detail}>
                                <h3>Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div className={styles.contact__detail}>
                                <h3>Visit</h3>
                                <p>123 Oak Street, Suite 400, San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    <form className={styles.contact__form}>
                        <input type="text" placeholder="Your name" />
                        <input type="email" placeholder="Your email" />
                        <input type="text" placeholder="Subject" />
                        <textarea rows="6" placeholder="Write your message" />
                        <button type="submit">Send message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;