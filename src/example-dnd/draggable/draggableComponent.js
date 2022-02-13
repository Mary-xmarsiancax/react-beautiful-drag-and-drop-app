import {Draggable} from "react-beautiful-dnd";
import s from "./draggable.module.css"
import {useStore} from "react-redux";

const DraggableComponent = () => {
    const store = useStore()
    return (
        <div>
            {store.getState().storeItems.items.map((obj, index) =>
                <Draggable key={obj.id} id={obj.id} draggableId={obj.id.toString()} index={index}>
                    {(provided, snapshot) => (
                        <div className={s.itemsEl} ref={provided.innerRef}
                             {...provided.draggableProps}
                             {...provided.dragHandleProps}>
                            {obj.content}
                        </div>
                    )}
                </Draggable>
            )}
        </div>
    )
}
export default DraggableComponent;