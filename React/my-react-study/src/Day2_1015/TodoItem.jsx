function TodoItem({ todo, onToggle }) {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      // onToggle(todo.id) 로 하지 않는 이유 -> React 이벤트 핸들링 특이점
      // 위와 같이 하면 화면이 렌더링 됨과 동시에 클릭이벤트 실행
      // 즉, 클릭과 상관없이 이벤트가 발동됨
      // 원하는 상황에서 이벤트가 발동되게 하기 위해 화살표 함수 사용
      style={{
        cursor: 'pointer',
        textDecoration: todo.done ? 'line-through' : 'none', // 완료시 텍스트 중앙선
        color: todo.done ? 'gray' : 'green', // 완료시 텍스트 회색
        marginBottom: '8px',
      }}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
