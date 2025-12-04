import ThemeSwitcher from "../../components/themeSwitcher/ThemeSwitcher";
import { useToasts } from "../../components/toast/ToastContext";
import "./Home.scss";

export default function Home() {

        const { pushToast } = useToasts();

        const toastTest = () => {
                pushToast({
                        title: "Test",
                        content: "This is a Test Toast",
                        type: "success",
                        duration: 5
                })
        }

        return (
                <div>
                        Home page

                        <button className="button is-info" onClick={toastTest}>Toast</button>

                        <ThemeSwitcher />

                        <div className="columns">
                                <div className="column">

                                </div>
                        </div>
                </div>
        )
}
