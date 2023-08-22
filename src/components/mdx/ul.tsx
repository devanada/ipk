interface Props {
  children?: React.ReactNode;
}

function UnorderedList({ children }: Props) {
  return <ul className="list-disc ml-10 my-2 list-outside">{children}</ul>;
}

export default UnorderedList;
