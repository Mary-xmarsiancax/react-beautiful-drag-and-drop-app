import {Droppable} from "react-beautiful-dnd";
import DraggableComponent from "../draggable/draggableComponent";
import s from "./droppable.module.css"

const DroppableComponent = () => {
    return (
        <Droppable droppableId="droppableId">
            {(provided, snapshot) => (
                <div className={s.itemsBlock}
                     {...provided.droppableProps}
                     ref={provided.innerRef}
                >
                    <DraggableComponent/>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
export default DroppableComponent;