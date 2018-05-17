import React from 'react';
import Article from './Article';

export default function ArticleList({articles}){
  const articleElements = articles.map((article) => <li key={article.id} className='article__item'><Article article = {article}/></li>)
  return(
    <ul className='article__list'>
      {articleElements}
    </ul>
  )
}