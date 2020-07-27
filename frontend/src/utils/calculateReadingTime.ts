export default function calculateReadingTime(content = "") {
  const WORDS_PER_MINUTE = 180

  const onlyWords = /\w+/g

  const wordCount = content.match(onlyWords).length

  const finalReadingTime = Math.ceil(wordCount / WORDS_PER_MINUTE)

  return finalReadingTime
}
