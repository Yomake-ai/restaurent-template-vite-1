import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllPostsIds, getPostData, getFeaturedPostsData } from "@library/posts";
import { getAuthorData } from "@library/authors";

import Date from '@library/date';

import PageBanner from "@components/PageBanner";
import PopularPosts from "@components/sliders/PopularPosts";
import Sidebar from "@components/Sidebar";

import PopularsPostsData from "@data/sliders/popular-posts.json";

function PostsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState(null);
  const [authorData, setAuthorData] = useState(null);
  const [populars, setPopulars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const popularsData = await getFeaturedPostsData(PopularsPostsData.featured);
        const post = await getPostData(id);

        if (!post) {
          navigate('/404');
          return;
        }

        const author = await getAuthorData(post.author.toLowerCase().replace(' ', '-'));

        setPostData(post);
        setAuthorData(author);
        setPopulars(popularsData);
      } catch (error) {
        console.error('Error loading post:', error);
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

  if (!postData || !authorData) {
    return null;
  }

  return (
    <>
      <PageBanner pageTitle={postData.title} breadTitle={postData.categories[0]} type={postData.introLayout} />
      
      {/* publication */}
      <section className="sb-publication sb-p-90-90">
        <div className="container" data-sticky-container>
          <div className={postData.postLayout == 2 ? "row justify-content-center" : "row"}>
            <div className="col-lg-8">
              <div className="sb-author-panel">
                <div className="sb-author-frame">
                  <div className="sb-avatar-frame">
                    <img src={authorData.avatar} alt={postData.author} />
                  </div>
                  <h4>{postData.author}</h4>
                </div>
                <div className="sb-suptitle"><span><Date dateString={postData.date} /></span></div>
              </div>
              <div className="sb-post-cover sb-mb-30"><img src={postData.image} alt={postData.title} /></div>
              
              <div className="sb-text" dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
            </div>
            {postData.postLayout !== 2 &&
            <div className="col-lg-4">
              <div className="sb-sidebar-frame sb-pad-type-2 sb-sticky" data-margin-top="120">
                {typeof postData.details !== undefined && postData.postLayout !== 3 &&
                <div className="sb-sidebar">
                  <h3 className="sb-mb-30">{postData.details?.title}</h3>
                  <ul className="sb-list">
                    {postData.details?.items.map((item, key) => (
                    <li key={`blog-details-item-${key}`}><b>{item.label}</b><span>{item.value}</span></li>
                    ))}
                  </ul>
                </div>
                }
                {postData.postLayout == 3 &&
                <Sidebar />
                }
              </div>
            </div>
            }
          </div>
        </div>
      </section>
      {/* publication end */}

      <PopularPosts posts={populars} />
    </>
  );
}

export default PostsDetail;