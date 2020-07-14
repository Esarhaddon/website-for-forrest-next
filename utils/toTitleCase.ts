export default (title: string) => {
  const words = title.split(" ")
  const newTitle = words
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")

  return newTitle
}
