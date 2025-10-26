import { lazy, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AppData from "@data/app.json";
import PopularsPostsData from "@data/sliders/popular-posts.json";

import Pagination from '@components/Pagination';
import PageBanner from "@components/PageBanner";
import PopularPosts from "@components/sliders/PopularPosts";

import { getPaginatedPostsData, getFeaturedPostsData } from "@library/posts";

const BlogPaginated = lazy(() => import("@components/blog/BlogPaginated"));

function BlogPage() {
  const { page } = useParams();
  const navigate = useNavigate();
  const [populars, setPopulars] = useState([]);
  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const pageNum = parseInt(page);

        if (pageNum === 1) {
          navigate('/blog');
          return;
        }

        const popularsData = await getFeaturedPostsData(PopularsPostsData.featured);
        const { posts, total } = getPaginatedPostsData(AppData.settings.perPage, pageNum);

        if (!posts || posts.length === 0) {
          navigate('/404');
          return;
        }

        setPopulars(popularsData);
        setPostsData({
          posts: posts,
          totalPosts: total,
          currentPage: pageNum
        });
      } catch (error) {
        console.error('Error loading blog page:', error);
        navigate('/404');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [page, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!postsData) {
    return null;
  }

  return (
    <>
      <PageBanner pageTitle={"Our Blog"} breadTitle={"Blog"} />

      <section className="sb-blog-list sb-p-90-90">
        <div className="sb-bg-1">
          <div></div>
        </div>
        <div className="container">
          <div className="sb-mb-60">
            <h2 className="sb-cate-title sb-mb-30">Latest <span>publications</span></h2>
            <p className="sb-text">Consectetur numquam poro nemo veniam<br/>eligendi rem adipisci quo modi.</p>
          </div>

          <BlogPaginated
            items={postsData.posts}
          />

          <div>
            <Pagination
              currentPage={postsData.currentPage}
              totalItems={postsData.totalPosts}
              perPage={AppData.settings.perPage}
              renderPageLink={(page) => `/blog/page/${page}`}
            />
          </div>
        </div>
      </section>

      <PopularPosts posts={populars} />
    </>
  );
}

export default BlogPage;
