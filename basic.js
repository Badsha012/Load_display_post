const LoadPost = () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
    //    console.log(data);

    displayPost(data);
    });

};