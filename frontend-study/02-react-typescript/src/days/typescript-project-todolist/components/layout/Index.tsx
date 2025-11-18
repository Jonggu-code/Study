import TodoInput from '../todo/TodoInput';
import TodoList from '../todo/TodoList';
import FilterBtn from '../todo/FilterBtn';
import AlertModal from '../ui/Modal/AlertModal';
import ConfirmModal from '../ui/Modal/ConfirmModal';
import { useTodo } from '../../hooks/useTodo';
import { useAlert } from '../../hooks/useAlert';
import SearchBar from '../todo/SearchBar';
import UndoBar from '../todo/UndoBar';
import { Spinner } from '../ui/Spinner';
import LoadingDots from '../ui/LoadingDots';
import TodayLabel from '../todo/TodayLabel';

function Index() {
  const {
    setTodos,
    addTodo,
    updateTodo,
    toggleTodo,
    loading,

    filter,
    setFilter,

    search,
    setSearch,
    searchOn,
    setSearchOn,

    lastDeleted,
    setLastDeleted,

    filteredTodos,

    confirm,
    setConfirm,
    openConfirm,
    handelConfirmDelete,

    deleteTarget,
  } = useTodo();

  const { alert, showAlert } = useAlert();

  if (loading) {
    return (
      <div className="flex flex-col items-center text-center mt-20 gap-10">
        <Spinner />
        <LoadingDots />
      </div>
    );
  }
  return (
    <div className="relative text-gray-700 p-5 border-2 border-lime-500 m-1 box-border w-xl h-max bg-lime-100">
      <div className="flex justify-between items-end mb-5 px-2">
        <h2 className="text-3xl font-bold">🧩 To do List</h2>
        <TodayLabel />
      </div>
      <TodoInput addTodo={addTodo} showAlert={showAlert} />
      <div className="flex justify-between items-center mb-5">
        <SearchBar
          search={search}
          setSearch={setSearch}
          searchOn={searchOn}
          setSearchOn={setSearchOn}
        />
        <FilterBtn filter={filter} setFilter={setFilter} />
        <UndoBar
          lastDeleted={lastDeleted}
          setTodos={setTodos}
          setLastDeleted={setLastDeleted}
          showAlert={showAlert}
        />
      </div>
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
          showAlert={showAlert}
        />
      )}
    </div>
  );
}

export default Index;
