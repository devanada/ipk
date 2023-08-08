interface Props {
  children?: React.ReactNode;
}

export const Heading = {
  H1: ({ children }: Props) => (
    <h1 className="text-2xl font-bold text-primary-content">{children}</h1>
  ),
  H2: ({ children }: Props) => (
    <h2 className="text-xl font-bold mb-3 text-primary-content">{children}</h2>
  ),
};
