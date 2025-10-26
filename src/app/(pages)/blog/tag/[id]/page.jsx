import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AppData from "@data/app.json";
import PopularsPostsData from "@data/sliders/popular-posts.json";

import Pagination from '@components/Pagination';
import PageBanner from "@components/PageBanner";
import PopularPosts from "@components/sliders/PopularPosts";
import BlogFiltered from "@components/blog/BlogFiltered";

import { getTagData } from "@library/tags";
import { getTagPosts, getFeaturedPostsData } from "@library/posts";

function BlogTag() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [populars, setPopulars] = useState([]);
  const [postsData, setPostsData] = useState(null);
  const [tagData, setTagData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const popularsData = await getFeaturedPostsData(PopularsPostsData.featured);
        const tag = await getTagData(id);

        if (!tag) {
          navigate('/404');
          return;
        }

        const posts = await getTagPosts(id);

        setPopulars(popularsData);
        setTagData(tag);
        setPostsData(posts);
      } catch (error) {
        console.error('Error loading tag:', error);
        navigate('/404');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [id, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!tagData || !postsData) {
    return null;
  }

  return (
    <>
      <PageBanner pageTitle={`Blog archive for <br/>${tagData.title}`} breadTitle={tagData.title} />

      <section className="sb-blog-list sb-p-90-90">
        <div className="sb-bg-1">
          <div></div>
        </div>
        <div className="container">
          <div className="sb-mb-60">
            <h2 className="sb-cate-title sb-mb-30"><span>{tagData.title}</span></h2>
          </div>

          <BlogFiltered
            tagId={id}
            items={postsData}
          />
        </div>
      </section>

      <PopularPosts posts={populars} />
    </>
  );
}

export default BlogTag;
