import {
  BlogContainer,
  BlogInformation,
  BlogDate,
  BlogHeader,
  BlogText,
  BlogButton,
} from "./Blog.styled";

export function Blog() {
  return (
    <BlogContainer>
      <BlogInformation>
        <BlogDate>April 16 2020</BlogDate>
        <BlogHeader>Blog Post One</BlogHeader>
        <BlogText>
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptate, ipsum dignissimos
          quae laudantium asperiores nam aliquid impedit
          harum illum dolore explicabo ab dolores itaque
          rerum temporibus doloribus iste maiores deleniti?
        </BlogText>
        <BlogButton type="button">Read Our Blog</BlogButton>
      </BlogInformation>
      <div></div>
    </BlogContainer>
  );
}
