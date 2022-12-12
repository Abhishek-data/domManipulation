const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}

]

function getPosts(){
    setTimeout(() => {
        let output = ''
        posts.forEach(post=>{
            output+= `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            posts.push(post)
            
            const error = false;
            if(!error){
                resolve()
            }else{
                reject('Error: something went worng')
            }
        }, 2000)
    })
    
}

function deletePost(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let error = false
            if(posts.length==0){
                error = true
            }
            posts.pop()

            
            if(!error){
                resolve()
            }else{
                reject('Error: Array is empty now.')
            }
        }, 1000);
    })
    
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(() => {
    getPosts()
    deletePost().then(() =>{
        console.log(posts)
    })
}).catch(err => console.log(err));
// deletePost().then(getPosts).catch(err => console.log(err))
// deletePost().then(getPosts).catch(err => console.log(err))
// deletePost().then(getPosts).catch(err => console.log(err))
// deletePost().then(getPosts).catch(err => console.log(err))
// createPost({title: 'Post Four', body: 'This is post Four'})
// .then(getPosts).catch(err => console.log(err));
// deletePost().then(getPosts).catch(err => console.log(err))

// promise1 = Promise.resolve('Hello World')
// promise2 = 10
// promise3 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 2000, 'Goodbye')
// })

// Promise.all([promise1, promise2, promise3]).then(values =>{
//     console.log(values)
// })

function updateLastUserActivityTime(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            posts.lastActivitytime = new Date().getTime()
            resolve()
        }, 1000)
    })
}

function userUpdatePost(){
    Promise.all([createPost, updateLastUserActivityTime])
    .then(([createPostResole, updateLastUserActivityTimeResolve])=>{
        console.log(updateLastUserActivityTimeResolve)
    }).catch(err => console.log(err))
}

