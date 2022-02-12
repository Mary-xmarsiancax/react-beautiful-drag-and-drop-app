import {Droppable} from "react-beautiful-dnd";
import DraggableComponent from "../draggable/draggableComponent";
import s from "./droppable.module.css"

const DroppableComponent = (props) => {
    return (
        <Droppable droppableId="droppableId">
            {(provided, snapshot) => (
                <div className={s.itemsBlock}
                     {...provided.droppableProps}
                     ref={provided.innerRef}
                >
                    <DraggableComponent items={props.items}/>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
export default DroppableComponent;