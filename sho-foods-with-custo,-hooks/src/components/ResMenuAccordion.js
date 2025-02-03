
import ResMenuItemDetail from "./ResMenuItemDetail";

const ResMenuAccordion = ({ menu, showItems, setShowItems }) => {

    const handleAccordion = () => {
       // setShowItems(!showItems);
       setShowItems();
    }

    return (
        <div className="accordianContainer">
            <div className="accordionHeader" onClick={handleAccordion}>
                <span>{menu.card?.card?.title} ({menu.card?.card?.itemCards?.length})</span>
                
                <span>▼</span>
            </div>
            


            { showItems &&
            menu.card?.card?.itemCards.map((item) => (
                <ResMenuItemDetail key={item.card?.info?.id} item={item} />
            ))
            }

            

        </div>
    )

 }

export default ResMenuAccordion;