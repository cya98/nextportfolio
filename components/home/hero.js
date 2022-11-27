import Link from 'next/link'
import React from 'react'
import Animation from '../../components/animation'
export default function hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 밀키스입니다!
          <br className="hidden lg:inline-block" />
          오늘도 밀키스 한잔?
        </h1>
        <p className="mb-8 leading-relaxed">
          굳세게 청춘 그들은 얼음에 피다. 용기가 든 청춘에서만 말이다. 그들의
          듣기만 현저하게 위하여 그와 가슴에 하는 창공에 희망의 사막이다.
          평화스러운 따뜻한 열락의 끝에 때문이다. 청춘의 설레는 더운지라 붙잡아
          가치를 자신과 이상 약동하다. 천고에 그들은 발휘하기 이것이다. 놀이
          보배를 대한 할지라도 청춘의 얼음에 가는 길지 봄바람이다. 가지에 품에
          이상을 그것을 얼마나 우는 철환하였는가? 곳이 피부가 영락과 곧 얼마나
          노래하며 것은 우리의 그리하였는가?
        </p>
        <Link href="/projects">
          <div className="flex justify-center">
            <button className="btn-project">프로젝트보러가기</button>
          </div>
        </Link>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  )
}
