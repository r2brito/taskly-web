import React, { forwardRef, ReactNode, HTMLAttributes } from "react";
import { Helmet } from "react-helmet-async";
import { Wrapper } from "./styles";

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  meta?: ReactNode;
}

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, title = "", meta, ...rest }, ref) => (
    <>
      <Helmet>
        <title>{`${title} | Task`}</title>
        {meta}
      </Helmet>

      <Wrapper
        ref={ref}
        {...rest}
      >
        {children}
      </Wrapper>
    </>
  )
);

export default Page;
