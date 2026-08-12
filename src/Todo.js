// import React, { useEffect } from "react";


// function App() {

//   useEffect(() => {

//     $("#addTask").click(function () {

//       let task = $("#taskInput").val();

//       if (task.trim() !== "") {

//         $("#taskList").append(`
//           <div class="todo-row">
//             <input type="checkbox" class="check">
//             <span class="task-text">${task}</span>
//           </div>
//         `);

//         $("#taskInput").val("");
//       }
//     });

//     $("#addPriority").click(function () {

//       let task = $("#priorityInput").val();

//       if (task.trim() !== "") {

//         $("#priorityList").append(`
//           <div class="todo-row">
//             <input type="checkbox" class="check">
//             <span class="task-text">${task}</span>
//           </div>
//         `);

//         $("#priorityInput").val("");
//       }
//     });

//     $("#addReminder").click(function () {

//       let task = $("#reminderInput").val();

//       if (task.trim() !== "") {

//         $("#reminderList").append(`
//           <div class="todo-row">
//             <input type="checkbox" class="check">
//             <span class="task-text">${task}</span>
//           </div>
//         `);

//         $("#reminderInput").val("");
//       }
//     });

//     $(document).on("change", ".check", function () {
//       $(this).next(".task-text").toggleClass("completed");
//     });

//   }, []);

//   return (
//     <div className="page">

//       <div className="todo-container">

//         <h1>TO DO LIST</h1>

//         <div className="sections">

//           <div className="column">

//             <h3>TASK LIST</h3>

//             <div className="input-box">
//               <input
//                 type="text"
//                 id="taskInput"
//                 placeholder="Enter task"
//               />
//               <button id="addTask">Add</button>
//             </div>

//             <div id="taskList"></div>

//           </div>

//           <div className="column">

//             <h3>TOP PRIORITIES</h3>

//             <div className="input-box">
//               <input
//                 type="text"
//                 id="priorityInput"
//                 placeholder="Enter priority"
//               />
//               <button id="addPriority">Add</button>
//             </div>

//             <div id="priorityList"></div>

//             <h3 className="reminder-title">REMINDER</h3>

//             <div className="input-box">
//               <input
//                 type="text"
//                 id="reminderInput"
//                 placeholder="Enter reminder"
//               />
//               <button id="addReminder">Add</button>
//             </div>

//             <div id="reminderList"></div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import $ from "jquery";
import Todo from "./Todo.css"
const App = () => {
  useEffect(() => {
    // Add Task
    $(".on").click(function (e) {
      e.preventDefault();

      const task = $("input").val().trim();

      if (task === "") {
        alert("Please enter a task");
        return;
      }

      $("ul").append(`
        <li style="margin:10px 0;">
          <input type="checkbox" class="check" />
          <span style="margin:0 10px;">${task}</span>
          <button class="delete">Delete</button>
        </li>
      `);

      $("input").val("");
    });

    // Delete Task
    $("ul").on("click", ".delete", function () {
      $(this).parent().remove();
    });

    // Strike through completed task
    $("ul").on("change", ".check", function () {
      if ($(this).is(":checked")) {
        $(this)
          .siblings("span")
          .css({
            "text-decoration": "line-through",
            color: "gray",
          });
      } else {
        $(this)
          .siblings("span")
          .css({
            "text-decoration": "none",
            color: "black",
          });
      }
    });

    return () => {
      $(".on").off("click");
      $("ul").off("click", ".delete");
      $("ul").off("change", ".check");
    };
  }, []);

  return (
    <div className="container"  >
      <h1>To Do List</h1>
      <form>
        <input type="text" placeholder="Enter the To Do" />
        &nbsp;&nbsp;
        <button type="submit" className="on">
          Add
        </button>
      </form>
      <ul></ul>
    </div>
  );
};

export default App;