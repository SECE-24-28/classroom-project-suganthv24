const res=fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(user=>
            {
                return user.json()
            })
            .then(data=>
            {
                console.log(data)
            })
console.log(res)