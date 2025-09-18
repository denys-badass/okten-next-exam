import styles from './page.module.css';
import {LoginForm} from "@/components/login-form/LoginForm";

const LoginPage = () => {
    return (
        <div className={styles.loginContainer}>
            <LoginForm />
        </div>
    );
}

export default LoginPage;