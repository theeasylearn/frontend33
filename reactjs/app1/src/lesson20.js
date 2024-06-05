/* importing required react components */
import React from 'react';
import ReactDOM from 'react-dom/client';

function MailBox(props)
{
  let messages = props.messages;
  return (<div className='container'>
    <div className='row'>
      <div className='col-12'>
          <h1>Inbox</h1>
          <hr />
        {(messages.length > 0) ? <p> you have {messages.length} new messages</p> : <p>you have no new message</p>}
      </div>
    </div>
  </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
var messages = ['Hello','How are you','nice to meet you'];
// var messages = [];
root.render(<MailBox messages={messages} />)
