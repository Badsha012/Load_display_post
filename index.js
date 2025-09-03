const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
    //    console.log(data);

    displayPost(data);
    });
};


const displayPost =(posts) => {
    console.log(posts);


    // for(let i=0;i<posts.length;i++){
    //     console.log(posts[i]);
    // }

    // get the container

    const postContainer=document.getElementById("container-post");
    // console.log(postContainer);
    // array for eachloop
    // 
    posts.forEach((post) =>{
        // console.log(posts.title);
        // create HTML element
        const li= document.createElement("li");
        li.innerText =post.title;
        // console.log(li);

        // Add li container
        postContainer.appendChild(li);


    });

};