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
        <p>Hello, I'm Milad. I'm software engineer at Sakneen and Photographer. You can connect me on <a href='https://www.linkedin.com/in/miladezzat' target='_blank'>LinkedIn</a></p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, created, title, tags, readingTime }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={"/posts/" + id} key={id}>{title}</Link>              
              {tags?.map(tag => (
                <span className={utilStyles.tag} key={tag}> #{tag}</span>
              ))}
              <br />
              <Date dateString={created} readingTime={readingTime} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}