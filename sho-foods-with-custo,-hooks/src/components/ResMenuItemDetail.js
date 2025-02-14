import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ResMenuItemDetail = ({ item }) => {
    // console.log(item);

    const dispatch = useDispatch();

    const addItemFromFn = (item) => {
        console.log("additem ",item);
        dispatch(addItem(item));
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #bbb' }}>
            <div className="itemDetail">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                    <div>{item.card?.info?.name}</div>
                    
                </div>

                <p style={{ padding: '0', textAlign: 'left' }}>{item.card?.info.description}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '10px'}}>
                <button onClick={() => addItemFromFn(item)}>Add</button>
                <div> ₹{item.card?.info.price ? item.card?.info.price / 100 : item.card?.info.defaultPrice / 100} </div>
            </div>
        </div>

    )
};

export default ResMenuItemDetail;