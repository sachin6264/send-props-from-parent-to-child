import React from 'react';

const PostComponent = ({ handleChange, hanleSubmit, data, value }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter id "
        value={value}
        onChange={handleChange}
      />
      <button onClick={hanleSubmit}>Submit</button>
      {data && <div>{data?.title}</div>}
    </>
  );
};

export default PostComponent;
