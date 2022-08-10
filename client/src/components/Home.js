import React from "react";
import { useQuery } from '@apollo/client';
import { Query_PURCHASES } from '../utils/queries'

const Main = () => {
    
    let purchases = [];

    const { loading, data } = useQuery(Query_PURCHASES);
    if (!loading) {
        purchases = data?.purchases || [];
        console.log(purchases);
    }
    if (!purchases.length) {
        return <h3>No purchases yet for this month</h3>
    }
    return (
        <>
            {
                purchases.map(d => (
                    <div>
                        <p>{d.username} ----> {d.description} on {d.createdAt }</p>

                    </div>
                ))
            }
        </>
    )

}

export default Main;