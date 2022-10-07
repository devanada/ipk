import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import ReactMarkdown from "react-markdown";

interface Props {
  children: string;
}

function Markdown({ children }: Props) {
  return children !== "" ? (
    <ReactMarkdown
      className="markdown-body"
      children={children}
      remarkPlugins={[remarkGfm, remarkToc]}
      rehypePlugins={[
        rehypeSlug,
        rehypeRaw,
        rehypeSanitize,
        [rehypeHighlight, { ignoreMissing: true }],
      ]}
      components={{
        ul: ({ node, ...props }) => <ul className="list-disc" {...props} />,
        code: ({ node, inline, className, children, ...props }) => {
          return (
            <code
              className={`text-black dark:text-white ${className}`}
              {...props}
            >
              {children}
            </code>
          );
        },
      }}
    />
  ) : (
    <div className="w-full h-full flex justify-center items-center">
      <progress className="progress progress-accent w-56"></progress>
    </div>
  );
}

export default Markdown;
