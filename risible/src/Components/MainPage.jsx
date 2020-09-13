import React from 'react';

const MainPage = (props) => {

  return (
  <div className='body'>
    <div className='posts'>
        {
          props.posts.records.map((post) => {
            return (
          
              <div className='posts'>
                <p>{post.fields.description}</p>
                <a href={post.fields.link}>{post.fields.link}</a>
                <p>{post.fields.author}</p>
                <p>{post.fields.date}</p>
              </div>
            )
          })
        }
        
    </div>
</div>

)
}

export default MainPage;
