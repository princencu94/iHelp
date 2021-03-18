import React, { useEffect, useState } from 'react';
import './related-items.styles.css';
import { firestore } from '../../firebase/firebase-utils';
import CircularProgress from '@material-ui/core/CircularProgress';
import Product from '../product/product.component';

const RelatedItems = ({ related, id }) => {
    const [allRelated, setAllRelated] = useState();
    const [isLoading, setLoading] = useState(true);
    console.log(related);
    useEffect(() => {
    
        const Related = firestore.collection("products").where("related", "==", related);

        Related
        .get()
        .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
        if(data.length !== 0) {
            setAllRelated(data);
            setLoading(false);
        } else {
            setLoading(true);
        }
        console.log(allRelated)
        });
    },[])
   

    return (
        <div className="related-items-container">
            {
                isLoading !== true ?
                allRelated.filter((filtered => filtered.sn !== id)).map(related => 
                   <Product key={related.sn} product={related}/>
                )
                :
                <CircularProgress/>
            }
        </div>
    )
}

export default RelatedItems;