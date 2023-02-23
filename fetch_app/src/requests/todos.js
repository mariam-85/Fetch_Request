export const getToDo = (callback) => {
    fetch('https://dummyjson.com/todos')
      .then(resp => resp.json())
      .then(json => callback(json.todos))
  }

  export const addToDo = (body, callback) => {
    fetch('https://dummyjson.com/todos/add',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  },
    body: JSON.stringify(body)
  })
        .then(resp => resp.json())
        .then(json => callback(json))
  }