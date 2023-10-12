import { MessageCircle } from 'lucide-react';
import { useEffect } from 'react';

import { useCurrentLesson, useStore } from '../zustand-store';

import { Header } from '../components/Header';
import { Video } from '../components/Video';
import { Module } from '../components/Module';

export function Player() {
  const { currentLesson } = useCurrentLesson()

  const { course, load } = useStore(store => {
    return {
      course: store.course,
      load: store.load,
    }
  })

  useEffect(() => {
    load()
  }, [])

  useEffect(()=> {
    if (currentLesson) {
      document.title = `Assistindo: ${currentLesson.title}`
    }
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          

          <button className="flex items-center gap-2 rounded bg-red-500 hover:bg-red-600 px-3 py-2 text-sm font-medium text-white">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="w-80 divide-y-2 divide-zinc-900 scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 absolute top-0 bottom-0 right-0 overflow-y-auto border-l border-zinc-800 bg-zinc-900">
            {course?.modules && course.modules.map(({ id, lessons, title }, index) => {
              return (
                <Module
                  key={id}
                  moduleIndex={index} 
                  title={title}
                  lessonsAmount={lessons.length}
                />
              )
            })}
          </aside>
        </main>
      </div>
    </div>
  )
}