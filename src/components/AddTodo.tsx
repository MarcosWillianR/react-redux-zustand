import React, { FormEvent } from 'react';

import { useDispatch } from 'react-redux';
import { add } from '../store';

export function AddTodo() {
  const [newTodo, setNewTodo] = React.useState('');
  const dispatch = useDispatch();

  const handleAddNewTodo = React.useCallback((event: FormEvent) => {
    event.preventDefault();
    dispatch(add({ newTodo }))
    setNewTodo('');
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