import { useAppSelector } from "../store"

export function Header() {
  const { currentLessonTitle, currentModuleTitle } = useAppSelector(state => {
    const { currentLessonIndex, currentModuleIndex } = state.player

    const currentModuleTitle = state.player.course.modules[currentModuleIndex].title
    const currentLessonTitle = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex].title

    return { currentModuleTitle, currentLessonTitle }
  })
  
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLessonTitle}</h1>
      <span className="text-sm text-zinc-400">Módulo "{currentModuleTitle}"</span>
    </div>
  )
}