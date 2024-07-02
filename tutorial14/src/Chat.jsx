import { useState } from 'react';

export default function Chat({ contact }) {
  const [text, setText] = useState('');
  const [content,setContent] = useState('');

  function DoSend(e)
  {
    console.log("Name:" + contact.name);
    console.log("Email:" + contact.email);
    console.log("Text:" + text);

    let myPromise = new Promise((resolve, reject) => {
    try
    {
      setTimeout(() => {
        resolve("You sent content:"+text+" to "+contact.name + "[" + contact.email+"]");
        }, 1500);
    }
    catch(e)
    {
      reject("Failed to send");
    }
  }
  );
    myPromise.then(
      function (value){ setContent(value); },
      function (error){ setContent(error); },
    );
  }
  return (
    <>
    <section className="chat">
      <textarea
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button onClick={() => DoSend(contact)} >Send to {contact.email}</button>
      
    </section>
    <h1>{content}</h1>
    </>
  );
}

