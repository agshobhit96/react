const ResMenuItemDetail = ({ item }) => {
   // console.log(item);

    return (
        <div className="itemDetail">
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'}}>
                <div>{item.card?.info?.name}</div>
                <div> ₹{item.card?.info.price? item.card?.info.price/100 : item.card?.info.defaultPrice/100} </div>
            </div>
            
            <p style={{padding: '0', textAlign: 'left'}}>{item.card?.info.description}</p>
        </div>
    )
};

export default ResMenuItemDetail;