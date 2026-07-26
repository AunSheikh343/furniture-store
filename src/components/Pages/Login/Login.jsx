import styles from "./Login.module.css";

function Login() {
  return (
    <section className={styles.login}>
      <div className="container">

        <form className={styles.form}>

          <h1>Login</h1>

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            Login
          </button>

        </form>

      </div>
    </section>
  );
}

export default Login;