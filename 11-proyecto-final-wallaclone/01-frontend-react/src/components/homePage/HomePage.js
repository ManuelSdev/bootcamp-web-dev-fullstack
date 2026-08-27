import { Link } from "react-router-dom"
import Layout from "../layout/Layout"
import Button from "../shared/Button"




const HomePage = () => {
    return (
        <Layout>
            <div className="HomePage">
                HOME PAGE
                <Link to="/ads"><Button>ADS</Button></Link>
            </div>
        </Layout>
    )
}

export default HomePage