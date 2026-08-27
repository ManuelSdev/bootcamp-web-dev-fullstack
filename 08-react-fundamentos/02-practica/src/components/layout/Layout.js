import Header from "./Header"



const Layout = ({ children }) => {

    return (
        <div className="layout">
            <Header></Header>
            <main className="container">
                {children}
            </main>
        </div>
    )
}

export default Layout