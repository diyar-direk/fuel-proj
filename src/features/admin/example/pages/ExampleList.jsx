import useAddPath from "../../../../hooks/useAddPath";

const paths = [{ children: "Example" }];

function ExampleList() {
  useAddPath(paths);

  return <div>Example</div>;
}

export default ExampleList;
