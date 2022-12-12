import Link from 'next/link'
import React from 'react'
import Animation from '../../components/animation'
export default function hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 중부대학교에 재학중인 정찬하 입니다.
          <br className="hidden lg:inline-block" />
          오늘도 밀키스 한잔?
        </h1>
        <p className="mb-8 leading-relaxed">
          안녕하세요! 저는 현재 중부대학교 2학년 정보보호학과에 재학중이며
          next.js, Tailwindcss를 통해 포트폴리오 웹 사이트를 만들어보았습니다.
          하단의 프로젝트 보러가기 버튼을 클릭하시면 웹사이트 프로젝트 팀인
          두반장 팀의 프로젝트인 JBmarket 에대한 주소와 설명을 확인하실 수
          있습니다.
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
