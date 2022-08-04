import faker from "faker";
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./style/App.css";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning</h4>
        <div>Are you sure want to do this ?</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="Today at 6:00 PM"
          comment="How are you today guys?"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ömer"
          date="Yesterday at 1:00 PM"
          comment="You are spectacular"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Emine"
          date="Two days ago"
          comment="What a nice coincidence"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Emirhan"
          date="Today at 2:00 PM"
          comment="I feel so good!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Emirhan"
          date="Today at 2:00 PM"
          comment="I feel so good!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));

//<link
// rel="stylesheet"
// href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
// />
