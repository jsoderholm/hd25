function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-center text-4xl font-semibold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] z-10">
      {children}
    </h1>
  )
}

export default Title
