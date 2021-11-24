import { ChildAsFC } from "./Child";

const Parent = () => {
  return <ChildAsFC color="red" onClick={()=> console.log("Clicked")}>
      ioho
  </ChildAsFC>;
};

export default Parent;
