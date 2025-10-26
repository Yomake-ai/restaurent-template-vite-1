import { lazy, useEffect, useState } from "react";

import AppData from "@data/app.json";
import PopularsPostsData from "@data/sliders/popular-posts.json";

import Pagination from '@components/Pagination';
import PageBanner from "@components/PageBanner";
import PopularPosts from "@components/sliders/PopularPosts";
import Sidebar from "@components/Sidebar";

import { getPaginatedPostsData, getFeaturedPostsData } from "@library/posts";

const BlogPaginated = lazy(() => import("@components/blog/BlogPaginated"));

function Blog() {
  const [populars, setPopulars] = useState([]);
  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const popularsData = await getFeaturedPostsData(PopularsPostsData.featured);
        const { posts, total } = getPaginatedPostsData(AppData.settings.perPage, 1);

        setPopulars(popularsData);
        setPostsData({
          posts: posts,
          totalPosts: total,
          currentPage: 1
        });
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!postsData) {
    return null;
  }

  return (
    <>
      <PageBanner pageTitle={"Our Blog"} breadTitle={"Blog"} />

      {/* blog list */}
      <section className="sb-blog-list sb-p-90-90">
        <div className="sb-bg-1">
          <div></div>
        </div>
        <div className="container" data-sticky-container>
          <div className="row">
            <div className="col-lg-8">
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
            <div className="col-lg-4">
              <div className="sb-sidebar-frame sb-pad-type-2 sb-sticky" data-margin-top="120">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog list end */}

      <PopularPosts posts={populars} />
    </>
  );
}

export default Blog;
