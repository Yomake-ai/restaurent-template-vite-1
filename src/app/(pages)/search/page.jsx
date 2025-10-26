import { useEffect, useState } from "react";

import PageBanner from "@components/PageBanner";
import SearchBarModule from '@components/SearchBar';

import { getSortedPostsData } from "@library/posts";

function Search() {
  const [generateJsonPosts, setGenerateJsonPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const postsData = await getSortedPostsData();
        setGenerateJsonPosts(postsData);
      } catch (error) {
        console.error('Error loading search data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageBanner pageTitle={"Search"} breadTitle={"Search"} />

      {/* search */}
      <section className="sb-p-90-90">
        <div className="container">
          <div className="sb-mb-90">
            <h2 className="sb-mb-30">Type a <span>word</span></h2>
            <p className="sb-text sb-mb-60">Consectetur numquam poro nemo veniam<br/>eligendi rem adipisci quo modi.</p>

            <SearchBarModule posts={generateJsonPosts} />
          </div>
        </div>
      </section>
      {/* search end */}
    </>
  );
}

export default Search;
