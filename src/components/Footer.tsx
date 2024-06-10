export default function Footer() {
  return (
    <footer className="max-w-[1000px] mx-auto py-3 grid place-items-center gap-2 bg-slate-900 text-slate-400">
      <div>
        Hecho con <span style={{ color: "red" }}> ❤ </span> por{" "}
        <a
          href="https://www.linkedin.com/in/nico-battaglia/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline text-slate-100"
        >
          Nico Battaglia
        </a>
      </div>
    </footer>
  )
}
