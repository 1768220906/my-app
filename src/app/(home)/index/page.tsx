async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return <div>index</div>
}

export default Page
