import Image from "next/image"
import { paises } from "./data/data"

export const PartidoEliminatorioPrimeraFase = ({
  equipo1Id,
  equipo2Id,
  footer,
}: {
  equipo1Id: string
  equipo2Id: string
  footer: string
}) => {
  const equipo1 = paises.find((item) => item.id === equipo1Id)
  const equipo2 = paises.find((item) => item.id === equipo2Id)

  return (
    <div className="max-w-64 px-1 md:px-6 pt-2 pb-1 border-2 rounded border-slate-400 text-lg bg-slate-300">
      <ul className="grid gap-1 overflow-hidden">
        {equipo1 ? (
          <li className="flex items-center gap-4">
            <Image
              src={equipo1?.bandera}
              width={32}
              height={32}
              alt="bandera"
              className="min-w-[32px]"
            />{" "}
            {equipo1?.pais}
          </li>
        ) : (
          <li className="text-center">{footer.substring(0, 3)}</li>
        )}

        {equipo2 ? (
          <li className="flex items-center gap-4">
            <Image
              src={equipo2?.bandera}
              width={32}
              height={32}
              alt="bandera"
              className="min-w-[32px]"
            />{" "}
            {equipo2?.pais}
          </li>
        ) : (
          <li className="text-center">{footer.substring(8, 11)}</li>
        )}
      </ul>
      <div className="text-sm text-center text-slate-700 mt-2">{footer}</div>
    </div>
  )
}
