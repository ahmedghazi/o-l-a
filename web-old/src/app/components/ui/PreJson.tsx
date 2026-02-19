import React from "react";

type Props = {
  input: any;
};

const PreJson = ({ input }: Props) => {
  return (
    <pre
      style={{
        background: "black",
        fontSize: "1rem",
      }}>
      {JSON.stringify(input, null, 2)}
    </pre>
  );
};

export default PreJson;
