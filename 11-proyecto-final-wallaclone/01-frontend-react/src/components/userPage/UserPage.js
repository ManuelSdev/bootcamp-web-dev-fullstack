import UserNavBar from "./UserNavBar"
//import './UserPage.css'
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { UserProfilePage, UserAdsPage, UserFavoritesPage, UserRatingsPage, UserStatisticsPage, UserChatPage } from "./"
import EditAdPage from "../ads/editAdPage/EditAdPage"
import Layout from "../layout/Layout";

const UserPage = () => {



    return (
        <Layout>
            <div className="UserPage">
                PAGINA DE USUARIO
                <div className="is-flex is-flex-direction-row">
                    <UserNavBar></UserNavBar>
                    <Switch>
                        <Route path="/user/profile" component={UserProfilePage}></Route>
                        <Route path="/user/ads" component={UserAdsPage}></Route>
                        <Route path="/user/chat" component={UserChatPage}></Route>
                        <Route path="/user/favs" component={UserFavoritesPage}></Route>
                        <Route path="/user/ratings" component={UserRatingsPage}></Route>
                        <Route path="/user/statistics" component={UserStatisticsPage}></Route>
                        <Route path="/user/edit/:adId" component={EditAdPage}></Route>
                        <Route path="/user" component={UserAdsPage}></Route>
                    </Switch>
                </div>

            </div >
        </Layout>

    )
}

export default UserPage