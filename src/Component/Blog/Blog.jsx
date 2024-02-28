import React from "react";
import Banner from "../Banner/Banner";
import blogimg from "../../../public/Blog.jpeg";
import Loading from "../Loading/Loading";
import { useNavigation } from "react-router-dom";

const Blog = () => {
  const navigation = useNavigation();
  return (
    <div>
      {navigation.state === "loading" ? <Loading></Loading> : ""}
      <Banner
        heading={
          <p className="text-[5rem] font-medium text-fuchsia-950">Blog!!</p>
        }
        subHeading={
          <p className="text-[2.5rem] font-medium text-fuchsia-950">
            Tarmes & Condition
          </p>
        }
        img={blogimg}
      ></Banner>

      {/* blog Question and answer */}

      <div className="mx-10">
        <p className="text-[2rem] font-medium text-fuchsia-950">
          Ques: When Should You Use Contex API?
        </p>
        <br />
        <p className="text-[1rem] font-medium text-fuchsia-950">
          The React Context API can be used to provide state to multiple
          components that are far away in the component tree. However, it is
          important to consider whether context is the best choice for global
          state, as there are certain characteristics of React Context that may
          make it less suitable for certain scenarios . Here are some factors to
          consider when deciding whether to use the Context API: Data Flow and
          Visibility: Using context can make it harder to track the flow of data
          in your application compared to using props. It may be more difficult
          to determine which data is being used where, as props provide a clear
          and explicit data flow. The React documentation includes a section on
          "Before You Use Context" that highlights this issue . Overhead:
          Implementing context requires creating and updating multiple files,
          which can add unnecessary complexity to your codebase. If you only
          need to share state across nested components, passing it as props may
          be a simpler and more straightforward approach . Use Cases: Context
          API can be useful in various scenarios, such as authentication,
          theming, and responsiveness. For example, you can use context to
          control navigation based on authentication status, customize the theme
          of your app, or make your app responsive on different devices .
          Integration with Hooks: The Context API integrates well with function
          components and hooks, making it easy to implement encapsulated logic
          and configuration that needs to be accessed by multiple components
        </p>
        <br />
        <p className="text-[2rem] font-medium text-fuchsia-950">
          Ques: What is Custom Hook?
        </p>
        <br />
        <p className="text-[1rem] font-medium text-fuchsia-950">
        Custom Hooks in React are reusable functions that allow you to extract and share stateful logic between components. They are a way to abstract complex logic into a reusable function that can be used across multiple components.
        <ul>
            <li>1. A custom hook is a JavaScript function whose name starts with "use" to indicate that it follows the rules of hooks.</li>
            <li>
                2. Custom hooks can call other hooks, such as useState, useEffect, or even other custom hooks.
            </li>
            <li>
                3. They can encapsulate complex logic, such as data fetching, form handling, or any other stateful operations.
            </li>
            <li>
                4. Custom hooks can be used to separate concerns and make your code more modular and reusable.
            </li>
            <li>
                5. They can help in simplifying testing by providing a straightforward and isolated way to test reusable logic.
            </li>
            <li>
                6. Custom hooks can be shared across different components and even across different projects.
            </li>
        </ul>
        </p>
        <br />
        <p className="text-[2rem] font-medium text-fuchsia-950">
          Ques: What is UseRef?
        </p>
        <br />
        <p className="text-[1rem] font-medium text-fuchsia-950">
        The useRef hook in React is used to create a mutable reference that persists across component renders. It returns a mutable object with a current property that can hold any value.
        <ul>
            <li>1. The useRef hook is part of the React Hooks API introduced in React 16.8.</li>
            <li>
                2. It is commonly used to access and manipulate DOM elements directly.
            </li>
            <li>
                3. Unlike state variables created with useState, changing the value of ref.current does not trigger a re-render of the component.
            </li>
            <li>
                4. The current property of the ref object can be used to store any mutable value, not just DOM elements.
            </li>
            <li>
                5. useRef is useful for storing values that need to persist across renders, such as previous state values or any other mutable data..
            </li>
            <li>
                6. The useRef hook is typically used in conjunction with the useEffect hook to perform side effects or access the DOM.
            </li>
        </ul>
        </p>
        <br />
        <p className="text-[2rem] font-medium text-fuchsia-950">
          Ques: What is UseMemo?
        </p>
        <br />
        <p className="text-[1rem] font-medium text-fuchsia-950">
        The useMemo hook in React is used to memoize a value and optimize performance by avoiding unnecessary re-computations. It is similar to memoization in general programming, where the result of a function call is cached and returned when the same inputs are provided again.
        <ul>
            <li>1. The useMemo hook takes two arguments: a function that computes the value, and an array of dependencies.</li>
            <li>
                2. The function passed to useMemo is only executed when one of the dependencies in the array changes..
            </li>
            <li>
                3. If the dependencies remain the same between renders, the memoized value is returned without re-computing the function.
            </li>
            <li>
                4. useMemo is useful when you have expensive computations or calculations that don't need to be re-run on every render.
            </li>
            <li>
                5. It can also be used to optimize the performance of components that rely on complex data transformations or filtering..
            </li>
            <li>
                6. he memoized value returned by useMemo can be any type, such as a primitive value, object, or array.
            </li>
        </ul>
        </p>
      </div>
    </div>
  );
};

export default Blog;
