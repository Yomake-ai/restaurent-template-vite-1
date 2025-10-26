import { Suspense, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import SearchBarModule from '@components/SearchBar';

import { getSortedArchivesData } from "@library/archives";
import { getSortedCategoriesData } from "@library/categories";
import { getSortedTagsData } from "@library/tags";
import { getSortedAuthorsData } from "@library/authors";

function Sidebar() {
  const [archives, setArchives] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const archivesData = await getSortedArchivesData();
        const categoriesData = await getSortedCategoriesData();
        const tagsData = await getSortedTagsData();
        const authorsData = await getSortedAuthorsData();

        setArchives(archivesData || []);
        setCategories(categoriesData || []);
        setTags(tagsData || []);
        setAuthors(authorsData || []);
      } catch (error) {
        console.error('Error loading sidebar data:', error);
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
        {/* sidebar */}
        <div className="sb-sidebar">
            <div className="sb-ib-title-frame sb-mb-30">
                <h4>Search</h4>
                <i className="fas fa-arrow-down" />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <SearchBarModule />
            </Suspense>

            <div className="sb-ib-title-frame sb-mb-30">
                <h4>Categories</h4>
                <i className="fas fa-arrow-down" />
            </div>
            <ul className="sb-list sb-mb-30">
                {categories.map((item, key) => (
                <li key={`sidebar-categories-item-${key}`}><b><Link to={`/blog/category/${item.id}`}>{item.title}</Link></b></li>
                ))}
            </ul>

            <div className="sb-ib-title-frame sb-mb-30">
                <h4>Archives</h4>
                <i className="fas fa-arrow-down" />
            </div>
            <ul className="sb-list sb-mb-30">
                {archives.map((item, key) => (
                <li key={`sidebar-archives-item-${key}`}><b><Link to={`/blog/archive/${item.id}`}>{item.month}, {item.year}</Link></b></li>
                ))}
            </ul>

            <div className="sb-ib-title-frame sb-mb-30">
                <h4>Authors</h4>
                <i className="fas fa-arrow-down" />
            </div>
            <ul className="sb-list sb-mb-30">
                {authors.map((item, key) => (
                <li key={`sidebar-author-item-${key}`}><b><Link to={`/blog/author/${item.id}`}>{item.title}</Link></b></li>
                ))}
            </ul>

            <div className="sb-ib-title-frame sb-mb-30">
                <h4>Keywords</h4>
                <i className="fas fa-arrow-down" />
            </div>
            <ul className="sb-keywords">
                {tags.map((item, key) => (
                <li key={`sidebar-tags-item-${key}`}><Link to={`/blog/tag/${item.id}`}>{item.title}</Link></li>
                ))}
            </ul>
        </div>
        {/* sidebar end */}
    </>
  );
}

export default Sidebar;