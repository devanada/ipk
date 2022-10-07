import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkToc from "remark-toc";
import React from "react";

interface Props {
  children: string;
}

function Markdown({ children }: Props) {
  const flatten: any = (text: any, child: any) => {
    return typeof child === "string"
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text);
  };

  const HeadingRenderer = (props: any) => {
    var children = React.Children.toArray(props.children);
    var text: any = children.reduce(flatten, "");
    var slug = text.toLowerCase().replace(/\W/g, "-");
    return React.createElement("h" + props.level, { id: slug }, props.children);
  };

  return children !== "" ? (
    <ReactMarkdown
      className="markdown-body"
      children={children}
      remarkPlugins={[remarkGfm, remarkToc]}
      rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize]}
      components={{
        h2: HeadingRenderer,
        ul: ({ node, ...props }) => <ul className="list-disc" {...props} />,
      }}
    />
  ) : (
    <div className="w-full h-full flex justify-center items-center">
      <progress className="progress progress-accent w-56"></progress>
    </div>
  );
}

export default Markdown;
