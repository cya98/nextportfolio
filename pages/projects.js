import Layout from '../components/Layout'
import Head from 'next/head'
import { TOKEN, DATABASE_ID } from '../config'
import ProjectItem from '../components/projects/ProjectItem'

export default function Projects({ projects }) {
  console.log(projects)

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>밀키스 포트폴리오</title>
          <meta name="description" content="오늘도 밀키스!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
          {projects.results.map((aPorject) => (
            <ProjectItem key={aPorject.direction} data={aPorject} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'name',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  }

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  )
  const projects = await res.json()

  const projectNames = projects.results.map(
    (aPorject) => aPorject.properties.name.title[0]?.plain_text
  )

  console.log(`projectNames : ${projectNames}`)

  return {
    props: { projects }, // will be passed to the page component as props
  }
}
