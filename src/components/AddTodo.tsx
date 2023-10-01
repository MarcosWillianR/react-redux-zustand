import React, { FormEvent } from 'react';

export function AddTodo() {
  const [newTodo, setNewTodo] = React.useState('');

  const handleAddNewTodo = React.useCallback((event: FormEvent) => {
    event.preventDefault();
    // add new todo
  }, []);

  return (
    <form onSubmit={handleAddNewTodo}>
      <input 
        placeholder="Novo todo" 
        value={newTodo} 
        onChange={event => setNewTodo(event.target.value)}
      />

      <button>Adicionar</button>
    </form>
  )
}