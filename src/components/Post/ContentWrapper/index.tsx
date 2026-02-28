import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { PostBlockQuote, PostCode, PostH1, PostH2, PostH3, PostH4, PostH5, PostH6, PostHR, PostImage, PostLink, PostOL, PostPre, PostUL } from "./styles";
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/androidstudio.css"

interface ContentWrapperProps {
  children: ReactNode
}

export function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[[rehypeHighlight, { detect: true }]]}
      components={{
        img: ({src, alt}) => {
          if (!src || typeof src !== "string") return null

          return <PostImage src={src} alt={alt ?? ""} />
        },

        a: ({href, children}) => <PostLink href={href} target="_blank" rel="noopener noreferrer">{children}</PostLink>,

        pre: ({children}) => <PostPre>{children}</PostPre>,

        code: ({className, children, ...props})  => <PostCode className={className} {...props}>{children}</PostCode>,

        ul: ({children}) => <PostUL>{children}</PostUL>,

        ol: ({children}) => <PostOL>{children}</PostOL>,

        hr: () => <PostHR />,

        h1: ({children}) => <PostH1>{children}</PostH1>,
        h2: ({children}) => <PostH2>{children}</PostH2>,
        h3: ({children}) => <PostH3>{children}</PostH3>,
        h4: ({children}) => <PostH4>{children}</PostH4>,
        h5: ({children}) => <PostH5>{children}</PostH5>,
        h6: ({children}) => <PostH6>{children}</PostH6>,

        blockquote: ({children}) => <PostBlockQuote>{children}</PostBlockQuote>
      }}
    >
      { children?.toString() }
    </ReactMarkdown>
  )
}