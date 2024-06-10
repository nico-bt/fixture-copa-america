import Image from "next/image"
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react"
import { Pais, paises } from "./data/data"

export const PartidoEliminatorio = ({
  opciones,
  setOpcionesFinal,
}: {
  opciones?: string[]
  setOpcionesFinal: Dispatch<SetStateAction<string[]>>
}) => {
  const equiposFromIds: (Pais | undefined)[] =
    opciones && opciones.length > 0
      ? opciones?.map((idEquipo) => {
          return paises.find((item) => item.id === idEquipo)
        })
      : []

  const opcionesPrimerEquipo = [equiposFromIds[0], equiposFromIds[1]]
  const opcionesSegundoEquipo = [equiposFromIds[2], equiposFromIds[3]]

  //   Trackeo equipo seleccionado
  const [equipoUno, setEquipoUno] = useState("")
  const [equipoDos, setEquipoDos] = useState("")

  useEffect(() => {
    if (!opciones?.includes(equipoUno)) {
      setEquipoUno("")
    }
    if (!opciones?.includes(equipoDos)) {
      setEquipoDos("")
    }
  }, [opciones])

  useEffect(() => {
    setOpcionesFinal((prev) => {
      const opciones = [...prev]
      opciones[0] = equipoUno
      opciones[1] = equipoDos
      return opciones
    })
  }, [equipoUno, equipoDos])

  return (
    <div className="px-1 max-w-64 py-6 md:px-3 border-2 rounded border-slate-400 text-lg bg-slate-300">
      <ul className="grid gap-1">
        <li className="flex items-center gap-4">
          {/* Bandera */}
          {equipoUno &&
            opcionesPrimerEquipo?.map(
              (equipo) =>
                equipo?.id === equipoUno && (
                  <Image
                    key={equipo?.id}
                    src={equipo?.bandera}
                    width={32}
                    height={32}
                    alt={"bandera"}
                    className="min-w-[32px]"
                  />
                )
            )}

          {/* Select Equipo */}
          <select
            className="text-lg w-full"
            onChange={(e) => setEquipoUno(e.target.value)}
            value={equipoUno}
          >
            <option value="" disabled>
              A definir
            </option>
            {opcionesPrimerEquipo?.map(
              (equipo) =>
                equipo?.id && (
                  <option key={equipo?.id} className="flex" value={equipo?.id}>
                    {equipo?.pais}
                  </option>
                )
            )}
          </select>
        </li>

        <li className="flex items-center gap-4">
          {/* Bandera */}
          {equipoDos &&
            opcionesSegundoEquipo?.map(
              (equipo) =>
                equipo?.id === equipoDos && (
                  <Image
                    key={equipo?.id}
                    src={equipo?.bandera}
                    width={32}
                    height={32}
                    alt={"bandera"}
                    className="min-w-[32px]"
                  />
                )
            )}

          {/* Select Equipo */}
          <select
            className="text-lg w-full"
            onChange={(e) => setEquipoDos(e.target.value)}
            value={equipoDos}
          >
            <option value="" disabled>
              A definir
            </option>
            {opcionesSegundoEquipo?.map(
              (equipo) =>
                equipo?.id && (
                  <option key={equipo?.id} className="flex" value={equipo?.id}>
                    {equipo?.pais}
                  </option>
                )
            )}
          </select>
        </li>
      </ul>
    </div>
  )
}
