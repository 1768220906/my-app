// app/posts/[...lifestyle]/page.tsx
const page = async ({ params }) => {
  console.log(params, 'params')

  const res = await params
  console.log(res, 'res')

  return <div>life style page: {JSON.stringify(res)}</div>
}

export default page
