12) Question 12: What is the virtual DOM? How does react use the virtual DOM to render the UI?

Answer:
    When the application runs, DOM loads and presents the UI view to users. It is also slower than most javascript operations. When javascript frameworks update The DOM much more, so, this slowness increases. For ex: We want to make a change in any part in application, but, if change happens, all the same, the whole page is rendered again. It also takes time and more works than necessary. The Virtual DOM (VDOM) appears for inefficient updating. In react, there is Virtual DOM object for every DOM object and it is almost a copy of DOM object. When DOM object is created, it is copied to Virtual DOM and is keeped in back. Manipulating Virtual DOM is much faster. When we render a jsx element, its virtual DOM object updates. After Virtual DOM is updated, react compares it with Virtual DOM snapshot that was taken before it has updated and so, react figures out exactly which Virtual DOM objects have changed. It is called 'diffing'. 
    Then, react updates only those objects on the real DOM, and so, there is no need to load the page.


9) Question 9: What are refs used for in React?
Answer:
    Ref is a reference in react. We can store a reference to DOM nodes and also react elements using refs attribute. It provides a way to access React DOM nodes or React elements and how to interact with it. We use it when we want to change a value of child component without props. If we can code without it, it is better than using refs. We can create and use refs like 'React.createRef()'.


10) Question 10: What is children prop?

Answer: 
    Some components don’t know their children previously. This is common for components as sidebar and other components that represents 'boxes'. Using children props are recommended that passing children elements of such components directly into their output. Its syntax is "props.children".

