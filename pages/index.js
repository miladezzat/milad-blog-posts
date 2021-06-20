import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}



export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Milad. I'm Software Engineer and Photographer. You can connect me on <a href='https://www.linkedin.com/in/miladezzat' target='_blank' rel="noopener"> LinkedIn </a> I share what I learned about Software Engineering, Productivity, and building new habits on my <a  href='https://www.youtube.com/channel/UCewDJdWsup1lIgiV8v7dNnQ' target='_blank' rel="noopener"> Youtube channel </a> and blog. Feel free to join my newsletter to follow along.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, created, title, tags, readingTime }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={"/posts/" + id} key={id}>{title}</Link>              
              <Date dateString={created} readingTime={readingTime} />
              {tags?.map(tag => (
                <span key={`${tag}-${id}`}><span className={utilStyles.tag} key={tag}>#{tag} </span>&nbsp;</span>
              ))}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}