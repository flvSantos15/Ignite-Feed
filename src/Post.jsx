export function Post(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
      <p>{props.content}</p>
    </>
  )
}