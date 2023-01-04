import React, { Fragment } from "react";
import { PostContainer, PostContent, PostImage } from "./posts.styles";
import { useParams } from "react-router-dom";

const DevPost = ({ post: { title, id, body, imgUrl, author } }) => {
  const devPosts = [
    {
      title: "What is this blog?",
      id: "1-post",
      body: [
        "I decided to write this blog to share some things I learned in my programming journey. I will talk mostly about Javascript, React and TypeScript - for now.",
        "Some of the information I bring here was taken from reliable articles and rewritten in my own words for my best understanding.",
        "I hope these little articles are useful for you too!",
      ],
      author: "Mylena Vendramini",
      imgUrl: ["/what.png"],
    },
    {
      title: "map() vs forEach()",
      id: "2-post",
      body: [
        "What's the difference between map() and forEach() and when should we use them?",
        "Both map() and forEach() allow us iterate through arrays. They both receive a callback function as a parameter and apply it on each element of the array.",
        "The map() method then will return an entirely new array with the transformed values with the same number of items.",
        "The forEach() method won't return anything (undefined).",
        "Because of that, map() is chainable - we can attach other methods on it, like reduce(), filter() and so on - and forEach() is not.",
        "When we want to change, alternate or use the data, we should use map(). When we just want to do some action with each element of the array, but not return anything, we use forEach() or even for loop.",
      ],
      author: "Mylena Vendramini",
      imgUrl: ["/mapvsforeach.png"],
    },
    {
      title: "OOP",
      id: "3-post",
      body: [
        "Object-oriented programming (OOP) is a computer programming model. Notice: it's a model, not a language! This model organizes software design around data/objects rather than functions/logic.",
        "Right... and what is an object? In OOP, objects are the things we think of first when designing a program. It is like a data field that has unique attributes and behaviors.",
        "There are 4 important pillars in OOP that we have to know:",
        "Encapsulation: is the binding of data and methods together. It keeps both safe from outside interference and misuse.  Keeping an object's internal state private - other code can't change the internal state of an object - and making a clear division between it's public interface - selected information - and it's private state - all important information is contained within the object - is called encapsulation! ",
        "Abstraction: is hiding information. It means that each object should only expose operations that are relevant for the other objects and hide internal implementation details that are unnecessary to show.",
        "Inheritance: allows code reuse - new objects can take on the properties of objects that already exist",
        "Polymorphism: means redefining methods for derived classes. This is when a method has the same name but a different implementation in different classes. We use a class exactly like it's parent, but each child class keeps it's own methods as is. So remember: when an object can behave in different ways, we are talking about polymorphism.",
        "And what are the benefits of OOP?",
        "With encapsulation, we have less code complexity and more code reuse, it's easier to add new code, read through what was already coded and make changes. Abstraction also reduce the code complexity and isolate impact of changes, helping to split the complexity of the project into manageable pieces of code. With inheritance, we can eliminate redundant code. And of course, polymorphism allow us to share behaviors and make custom overrides, refactoring if/else and switch/case statements.",
      ],

      author: "Mylena Vendramini",
      imgUrl: ["/oop.png"],
    },
    // {
    //   title: "React App",
    //   id: "4-post",
    //   body: [
    //     "This is an app for anyone who wants a ready-made workout routine - with the ability to change weight, reps, and intervals - or who wants to add their own exercises.",
    //     "I made this app with React and TypeScript. Talking about React, I used tools like useParams, useState, useRef and routes - react-router-dom. About TypeScript now, I used interface and had to type Ref. Also, I used emailJS, so the user can print his workout and send to his email. It was a lot of fun creating this app and I hope you enjoy it too!",
    //     "Copy and paste this link to your URL to take a look at the app: https://mygymworkoutapp.netlify.app/",
    //     "Copy and paste this link to your URL to see it at GitHub: https://github.com/mylenavendramini/gym-app",
    //   ],

    //   author: "Mylena Vendramini",
    //   imgUrl: ["/gym.png"],
    // },
  ];
  const { postId } = useParams();

  function getPost(postId) {
    return devPosts.find(({ id }) => id === postId);
  }

  const post = getPost(postId);
  console.log(postId);
  return (
    <div>
      <PostContent key={id} id={id}>
        <h1>{title}</h1>
        {/*<p>Author: {author}</p>*/}
        <PostImage>
          {imgUrl.map((image) => (
            <img src={image} alt="post" />
          ))}
        </PostImage>
        {body.map((text) => (
          <h3>{text}</h3>
        ))}
      </PostContent>
    </div>
  );
};

export default DevPost;
