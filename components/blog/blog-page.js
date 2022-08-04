import React from "react";
import { Container, Row } from "react-bootstrap";

import PostPaginations from "../post-paginations";
import BlogCard from "./blog-card";

import BLOG_DATA from "../../data/news-data";
import Link from "next/link";

const BlogPage = () => {
  return (
    <section className="news-page pt-120 pb-120 gradient-background-4">
      <Container>
        <Row>
          <Link href="/newsletters ">
            <a className="btn">Newsletters</a>
          </Link>
        </Row>
        <div className="news-3-col">
          {BLOG_DATA.map(
            ({ image, title, date, link, commentCount, author }, index) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                date={date}
                link={link}
                commentCount={commentCount}
                author={author}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default BlogPage;
