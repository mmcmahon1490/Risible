import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/risible?Grid%20View`
      const response = await axios.get(airtableURL), {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setArticles(response.data.records);
    }
    getArticles();
  }, []);

  return (
    <div>
      <h4>Article</h4>
    </div>
  )

}

export default Article;