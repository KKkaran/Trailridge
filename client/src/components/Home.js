import React from "react";
import { useQuery } from '@apollo/client';
import { Query_PURCHASES } from '../utils/queries'
import Auth from "../utils/auth";
const Main = () => {

    if (!Auth.loggedIn()) {
        window.location.assign('/login')
    }

    let purchases = [];

    const { loading, data } = useQuery(Query_PURCHASES);
    if (loading) {
        return <h3>Loading Purchases...</h3>
    }
    if (!loading) {
        purchases = data?.purchases || [];
        //console.log(purchases);
    }
    if (!purchases.length) {
        return <h3>No purchases yet for this month</h3>
    }
    return (
        <div className="border border-dark p-4 text-center">
            {
                purchases.map(d => (
                    <div>
                        <p><strong>{d.username}</strong> ----> <strong>{d.description}</strong> for <strong>${d.price}</strong> on {d.createdAt }</p>

                    </div>
                ))
            }
        </div>
    )

}

export default Main;