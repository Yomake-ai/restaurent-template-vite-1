import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AppData from "@data/app.json";
import PopularsPostsData from "@data/sliders/popular-posts.json";

import Pagination from '@components/Pagination';
import PageBanner from "@components/PageBanner";
import PopularPosts from "@components/sliders/PopularPosts";
import BlogFiltered from "@components/blog/BlogFiltered";

import { getCategoryData } from "@library/categories";
import { getCategoryPosts, getFeaturedPostsData } from "@library/posts";

function BlogCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [populars, setPopulars] = useState([]);
  const [postsData, setPostsData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const popularsData = await getFeaturedPostsData(PopularsPostsData.featured);
        const category = await getCategoryData(id);

        if (!category) {
          navigate('/404');
          return;
        }

        const posts = await getCategoryPosts(id);

        setPopulars(popularsData);
        setCategoryData(category);
        setPostsData(posts);
      } catch (error) {
        console.error('Error loading category:', error);
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

  if (!categoryData || !postsData) {
    return null;
  }

  return (
    <>
      <PageBanner pageTitle={`Blog archive for <br/>${categoryData.title}`} breadTitle={categoryData.title} />

      <section className="sb-blog-list sb-p-90-90">
        <div className="sb-bg-1">
          <div></div>
        </div>
        <div className="container">
          <div className="sb-mb-60">
            <h2 className="sb-cate-title sb-mb-30"><span>{categoryData.title}</span></h2>
          </div>

          <BlogFiltered
            categoryId={id}
            items={postsData}
          />
        </div>
      </section>

      <PopularPosts posts={populars} />
    </>
  );
}

export default BlogCategory;
