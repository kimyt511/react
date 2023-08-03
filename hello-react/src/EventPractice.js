import { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username : '',
    message : ''
  });
  const { username, message } = form
  const onChange = e => {
    const nextform = {
        ...form,
        [e.target.name] : e.target.value
    };
    setForm(nextform);
  }
  const onClick = () => {
    alert(username + ' : ' + message);
    setForm({
        username: '',
        message : ''
    })
  };
  const onkeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>practice event</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="message"
        value={message}
        onChange={onChange}
        onClick={onkeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
