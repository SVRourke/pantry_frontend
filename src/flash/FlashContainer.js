import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./flash.scss";
import { removeMessage, clearMessages } from "../actions/FlashMessageActions";

const FlashCard = ({ msg, cb }) => {
  useEffect(() => {
    setTimeout(() => {
      cb(msg);
    }, 3000);
  }, []);

  return (
    <div className="messageCard">
      <p>{msg}</p>
      <button onClick={() => cb(msg)}>x</button>
    </div>
  );
};

const FlashContainer = ({ messages, clear, remove }) => {
  const lis = messages.map((msg) => {
    return <FlashCard msg={msg} cb={remove} />;
  });
  return <ul id="flashContainer">{lis}</ul>;
};

const mapDispatchToProps = (dispatch) => ({
  remove: (msg) => dispatch(removeMessage(msg)),
  clear: (msg) => dispatch(clearMessages(msg)),
});

const mapStateToProps = (state) => ({
  messages: state.flash,
});
export default connect(mapStateToProps, mapDispatchToProps)(FlashContainer);
