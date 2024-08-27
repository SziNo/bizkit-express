import Link from 'next/link'

const CustomLink = ({ children, ...props }) => (
  <Link prefetch={false} {...props}>
    {children}
  </Link>
)

export default CustomLink
