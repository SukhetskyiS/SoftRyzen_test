import {
  BlogContainer,
  BlogInformation,
  BlogDate,
  BlogHeader,
  BlogText,
  BlogButton,
} from "./Blog.styled";

import blog from "../../assets/home/blog.jpg";
import blog_2x from "../../assets/home/blog@2x.jpg";
import blog_webp from "../../assets/home/blog.webp";
import blog_webp2x from "../../assets/home/blog@2x.webp";

export function Blog() {
  const image = {
    src: blog,
    srcSet: `${blog} 1x, ${blog_2x} 2x`,
    webpSrcSet: `${blog_webp} 1x, ${blog_webp2x} 2x`,
  };

  return (
    <section id="blog">
      <img
        src={image.src}
        srcSet={`${image.srcSet}, ${image.webpSrcSet}`}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        alt="contact"
      />
      <BlogContainer>
        <BlogInformation>
          <BlogDate>April 16 2020</BlogDate>
          <BlogHeader>Blog Post One</BlogHeader>
          <BlogText>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptate, ipsum dignissimos
            quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque
            rerum temporibus doloribus iste maiores
            deleniti?
          </BlogText>
          <BlogButton type="button">
            Read Our Blog
          </BlogButton>
        </BlogInformation>
        <div></div>
      </BlogContainer>
    </section>
  );
}
