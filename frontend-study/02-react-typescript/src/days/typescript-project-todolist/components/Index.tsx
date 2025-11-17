import TodoInput from './TodoInput';
import TodoList from './TodoList';
import FilterBtn from './FilterBtn';
import AlertModal from './AlertModal';
import ConfirmModal from './ConfirmModal';
import { useTodo } from '../hooks/useTodo';
import { useAlert } from '../hooks/useAlert';

function Index() {
  const {
    todos,
    setTodos,
    addTodo,
    updateTodo,
    toggleTodo,

    filter,
    setFilter,

    filteredTodos,

    confirm,
    setConfirm,
    openConfirm,
    handelConfirmDelete,

    deleteTarget,
  } = useTodo();

  const {
    alert,

    showAlert,
  } = useAlert();

  return (
    <div className="relative text-gray-700 p-5 border-2 border-lime-500 m-1 box-border w-xl h-max bg-lime-100">
      <h2 className="text-3xl font-bold mb-8">🧩 To do List</h2>
      <TodoInput addTodo={addTodo} showAlert={showAlert} />
      <FilterBtn filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        setTodos={setTodos}
        toggleTodo={toggleTodo}
        openConfirm={openConfirm}
        deleteTarget={deleteTarget}
        updateTodo={updateTodo}
      />
      <AlertModal message={alert} />
      {confirm && (
        <ConfirmModal
          text={confirm.text}
          onConfirm={handelConfirmDelete}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}

export default Index;
