import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { Pais, grupos, paises } from "./data/data"
import Image from "next/image"
import { GanadoresGrupo } from "@/app/App"

export function Grupos({
  setPrimeros,
  setSegundos,
}: {
  setPrimeros: Dispatch<SetStateAction<GanadoresGrupo>>
  setSegundos: Dispatch<SetStateAction<GanadoresGrupo>>
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 justify-between gap-6">
      {grupos.map((grupo) => (
        <div
          className="border border-black rounded p-2 flex flex-col justify-between bg-slate-300"
          key={grupo}
        >
          <PaisesDelGrupo
            paisesGrupo={paises.filter((pais) => pais.grupo === grupo)}
            grupo={grupo}
          />
          <GanadoresDeGrupo
            paises={paises.filter((pais) => pais.grupo === grupo)}
            setPrimeros={setPrimeros}
            setSegundos={setSegundos}
          />
        </div>
      ))}
    </div>
  )
}

function PaisesDelGrupo({ paisesGrupo, grupo }: { paisesGrupo: Pais[]; grupo: string }) {
  return (
    <div>
      <h2 className="mb-2 border-b-2 border-slate-400 font-semibold">Grupo {grupo}</h2>
      <ul className="pb-2">
        {paisesGrupo.map((pais) => {
          return (
            pais.grupo === grupo && (
              <li key={pais.id} className="flex items-center gap-2 mb-1 pl-2">
                <Image src={pais.bandera} width={32} height={32} alt="bandera" />
                {pais.pais}
              </li>
            )
          )
        })}
      </ul>
    </div>
  )
}

function GanadoresDeGrupo({
  paises,
  setPrimeros,
  setSegundos,
}: {
  paises: Pais[]
  setPrimeros: Dispatch<SetStateAction<GanadoresGrupo>>
  setSegundos: Dispatch<SetStateAction<GanadoresGrupo>>
}) {
  const [elegido1, SetElegido1] = useState("")
  const [elegido2, SetElegido2] = useState("")

  const handleChangePrimero = (e: ChangeEvent<HTMLSelectElement>) => {
    setPrimeros((prev) => {
      const idSelected = e.target.value.substring(0, 2)
      const grupoSelected = e.target.value[3]

      SetElegido1(idSelected)
      return { ...prev, [grupoSelected]: idSelected }
    })
  }

  const handleChangeSegundo = (e: ChangeEvent<HTMLSelectElement>) => {
    setSegundos((prev) => {
      const idSelected = e.target.value.substring(0, 2)
      const grupoSelected = e.target.value[3]
      SetElegido2(idSelected)
      return { ...prev, [grupoSelected]: idSelected }
    })
  }

  return (
    <div className="pt-2 border-t border-slate-400 flex flex-col gap-1">
      <div className="flex align-middle justify-center gap-2">
        1️⃣
        <select
          defaultValue={"placeholder"}
          name="primero"
          className="w-full"
          onChange={handleChangePrimero}
        >
          <option value="placeholder" disabled>
            1° puesto
          </option>
          {paises.map((pais) =>
            pais.id === elegido2 ? null : (
              <option value={[pais.id, pais.grupo]} key={pais.id}>
                {pais.pais}
              </option>
            )
          )}
        </select>
      </div>
      <div className="flex align-middle justify-center gap-2">
        2️⃣
        <select
          defaultValue={"placeholder"}
          name="segundo"
          className="w-full"
          onChange={handleChangeSegundo}
        >
          <option value="placeholder" disabled>
            2° puesto
          </option>
          {paises.map((pais) =>
            pais.id === elegido1 ? null : (
              <option value={[pais.id, pais.grupo]} key={pais.id}>
                {pais.pais}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  )
}
