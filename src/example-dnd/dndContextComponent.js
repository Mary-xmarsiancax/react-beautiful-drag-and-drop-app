import {DragDropContext} from "react-beautiful-dnd";
import DroppableComponent from "./droppable/droppableComponent";
import {connect, useDispatch} from "react-redux";
import {setItems} from "../redux/itemsReducer";

const DndContextComponent = (props) => {
    const dispatch = useDispatch()
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        } else {
            dispatch(setItems(result.source.index,result.destination.index))
        }
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <DroppableComponent items={props.items}/>
        </DragDropContext>
    )
}

const mapStateToProps = (state) => ({
    items: state.storeItems.items
})

export default connect(mapStateToProps, {setItems})(DndContextComponent);