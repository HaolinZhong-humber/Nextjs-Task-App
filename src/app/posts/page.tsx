'use client';
import React, { useState, useEffect } from 'react';

const JsonApi = () => {

const [posts, setPosts] = useState([]);

useEffect(() => {

fetch('https://jsonplaceholder.typicode.com/posts')

.then((response) => response.json())

.then((responseData) => {

setPosts(responseData);

console.log(responseData);

});


}, []);


return (

<div>

{posts.map((post) => (

<Post post={post} key={post.id} />

))}

</div>

);

};



const Post = (props) => {

return (

<div>

<h1>{props.post.title}</h1>

<p>{props.post.body}</p>

</div>

);

};

export default JsonApi;