import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/risible`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setArticles(response.data.records);
    }
    getArticles();
  }, []);

  // 
  


  // console.log(articles[1].fields.article)

  return (
    <div>
      {articles.map((single, index) => {
        return (
          <>
          <h4 key={index}>{single.fields.Description}</h4>
          <h4>{single.fields.Article}</h4>
          <h4>{single.fields.Description}</h4>
          </>
        )
      })}
      <h4>go cats</h4>
    </div>
  )

}

export default Article;