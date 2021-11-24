interface ChildProps {
  color: string;
  onClick: () => void;
  children: string;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// Functional Component can receive a {children} prop
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return <div>{color}</div>;
};
