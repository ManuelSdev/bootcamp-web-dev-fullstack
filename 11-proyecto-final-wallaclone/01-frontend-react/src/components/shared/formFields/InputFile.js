import React from 'react';

import placeholder from '../../../assets/placeholder.png';

function InputFile({ onChange, ...props }) {
  const inputRef = React.createRef(null);
  const [src, setSrc] = React.useState(null);

  const loadSrcFromFile = file => {
    if (!file) {
      setSrc(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      setSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = ev => {
    const file = ev.target.files[0];
    loadSrcFromFile(file);
    onChange(ev);
  };

  return (
    <div className="file is-boxed">
      <input className="file-input" type="file" name="resume"
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleChange}
        {...props}
      />
      <img
        onClick={handleClick}
        src={src || placeholder}
        alt=""
        width="200"
        height="200"
        style={{ objectFit: 'contain' }}
      />

    </div >
  );
}

export default InputFile;
