import styles from "./About.module.css";

function About() {
    return (
        <section className={styles.about}>
            <div className="container">
                <div className={styles.about__hero}>
                    <div>
                        <h1>We create furniture for living beautifully.</h1>
                        <p>
                            FurniLux blends modern design with craftsmanship to
                            deliver furniture that feels welcoming, refined, and
                            lasting. Every piece is carefully selected for
                            comfort, quality, and timeless style.
                        </p>
                    </div>
                    <div>
                        <p>
                            Our story began with a passion for interiors that
                            look beautiful and perform well in everyday life.
                            From sofas and dining sets to storage and accent
                            pieces, we design furniture that makes every room
                            feel complete.
                        </p>
                    </div>
                </div>

                <div className={styles.about__values}>
                    <h2>Our values</h2>
                    <div className={styles.about__cards}>
                        <article className={styles.about__card}>
                            <h3>Timeless Design</h3>
                            <p>
                                Clean lines, elegant materials, and thoughtful
                                proportions help furniture fit both classic and
                                contemporary spaces.
                            </p>
                        </article>
                        <article className={styles.about__card}>
                            <h3>Premium Craftsmanship</h3>
                            <p>
                                We use durable woods, metals, and fabrics to
                                ensure our collections look great and stand up
                                to everyday life.
                            </p>
                        </article>
                        <article className={styles.about__card}>
                            <h3>Customer Care</h3>
                            <p>
                                Our team is here to help with product selection,
                                delivery, and design guidance for your home.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;