import React from "react";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course_title={course} />
      <Content />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.course_title}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part p1={props.part1} ex1={props.ex1} />
      <Part p2={props.part2} ex2={props.ex2} />
      <Part p3={props.part3} ex3={props.ex3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.ex1}
      </p>
      <p>
        {props.part2} {props.ex2}
      </p>
      <p>
        {props.part3} {props.ex3}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of Exercises: {props.totalExercises}</p>
    </div>
  );
};

export default App;
