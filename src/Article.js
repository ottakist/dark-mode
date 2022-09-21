import React from 'react'
import moment from 'moment'
const Article = ({ title, date, length, snippet }) => {
 
  return (
    <article className='post'>
      <h1>{title}</h1>
      <div className='post-info'>
        <span>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article
