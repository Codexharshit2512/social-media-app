import React, { useState, useEffect } from "react";

const Test = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <div>
      <label htmlFor="file">Choose file</label>
      <input
        onChange={(e) => setFile(e.target.files.length)}
        type="file"
        name="fileinput"
        id="fileI"
      />
    </div>
  );
};

export default Test;
