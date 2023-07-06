import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { selectVisibleCards } from 'redux/dashboards/selectors';
import { Task } from 'components/task/task';
import sprite from '../../images/symbol-defs.svg';
import SubmitButton from '../submitButton/submitButton';
import { EditColumnForm } from 'components/addColumn/addColumnForm/editColumnForm';
import { deleteColumn } from 'redux/dashboards/operations';
import Scroll from '../Scroll/ScrollCostom';
import {
  Container,
  Title,
  Item,
  Button,
  IconEdit,
  IconDelete,
  BtnContainer,
} from './column.styled';

export const Column = ({ column, tasks, index, handleClick }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const visibleTasks = useSelector(selectVisibleCards);

  const filtredTasks = visibleTasks.filter(
    task => task.parentColumn === column._id
  );

  return (
    <Draggable draggableId={column._id} index={index}>
      {provided => (
        <Item ref={provided.innerRef} {...provided.draggableProps}>
          <Container {...provided.dragHandleProps}>
            <Title {...provided.dragHandleProps}>{column.title}</Title>
            <BtnContainer>
              <Button type="button" onClick={toggleModal}>
                <IconEdit aria-label="edit">
                  <use href={sprite + '#icon-pencil-01'}></use>
                </IconEdit>
              </Button>
              <Button
                type="button"
                onClick={() => dispatch(deleteColumn(column._id))}
              >
                <IconDelete aria-label="delete">
                  <use href={sprite + '#icon-trash-04'}></use>
                </IconDelete>
              </Button>
            </BtnContainer>
            {isOpen && <EditColumnForm item={column} onClose={toggleModal} />}
          </Container>
          <Scroll width="calc(100% + 16px)" height="-1%">
            <Droppable droppableId={column._id} type="task">
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {filtredTasks.map((task, index) => {
                    return <Task key={task._id} task={task} index={index} />;
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Scroll>
          <SubmitButton
            title="Add another card"
            type="button"
            width={334}
            height="56"
            icon={true}
            handleClick={() => handleClick(column._id)}
          />
        </Item>
      )}
    </Draggable>
  );
};
