import styles from "./Blog.module.css";

function Blog() {
    const posts = [
        {
            category: "Design",
            title: "How to style a cozy living room with neutral tones",
            excerpt:
                "Discover easy layering techniques, warm textures, and furniture pairings that make your living space feel inviting.",
        },
        {
            category: "Tips",
            title: "Choosing the right dining table for your space",
            excerpt:
                "Learn what to consider for seating capacity, shape, and materials before you buy your next dining centerpiece.",
        },
        {
            category: "Inspiration",
            title: "Small bedroom ideas that maximize comfort",
            excerpt:
                "From multifunctional storage to curated lighting, create a bedroom that feels spacious and serene.",
        },
    ];

    return (
        <section className={styles.blog}>
            <div className="container">
                <div className={styles.blog__hero}>
                    <h1>Read our latest stories</h1>
                    <p>
                        Explore interior design advice, furniture guides, and seasonal updates from the FurniLux team.
                    </p>
                </div>

                <div className={styles.blog__posts}>
                    {posts.map((post) => (
                        <article key={post.title} className={styles.blog__post}>
                            <span>{post.category}</span>
                            <h3>{post.title}</h3>
                            <p>{post.excerpt}</p>
                            <button>Read more</button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;