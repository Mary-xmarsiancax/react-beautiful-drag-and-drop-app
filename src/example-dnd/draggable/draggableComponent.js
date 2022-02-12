import {Draggable} from "react-beautiful-dnd";
import s from "./draggable.module.css"

const DraggableComponent = (props) => {
    return (
        <div>
            {props.items.map((obj,index)=>
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