export default function TOC({ headings }) {
  return (
    <div className="toc">
      {headings.map((heading, idx) => {
        let prevDepth = idx > 0 ? headings[idx - 1].depth : Infinity
        switch (heading.depth) {
          case 1:
            return (
              <h1>
                <a href={`#${heading.slug}`}>{heading.text}</a>
              </h1>
            )
          case 2:
            return (
              <h2>
                <a
                  href={`#${heading.slug}`}
                  style={{ marginLeft: prevDepth < 2 ? '4px' : '' }}>
                  {heading.text}
                </a>
              </h2>
            )
          case 3:
            return (
              <h3>
                <a
                  href={`#${heading.slug}`}
                  style={{ marginLeft: prevDepth < 3 ? '5px' : '' }}>
                  {heading.text}
                </a>
              </h3>
            )
          case 4:
            return (
              <h4>
                <a
                  href={`#${heading.slug}`}
                  style={{ marginLeft: prevDepth < 3 ? '6px' : '' }}>
                  {heading.text}
                </a>
              </h4>
            )
          case 5:
            return (
              <h5>
                <a
                  href={`#${heading.slug}`}
                  style={{ marginLeft: prevDepth < 3 ? '7px' : '' }}>
                  {heading.text}
                </a>
              </h5>
            )
          case 6:
            return (
              <h6>
                <a
                  href={`#${heading.slug}`}
                  style={{ marginLeft: prevDepth < 3 ? '8px' : '' }}>
                  {heading.text}
                </a>
              </h6>
            )
        }
      })}
    </div>
  )
}
