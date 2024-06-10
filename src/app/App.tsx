"use client"

import { Grupos } from "@/components/Grupos"
import { PartidoEliminatorio } from "@/components/PartidoEliminatorio"
import { PartidoEliminatorioPrimeraFase } from "@/components/PartidoEliminatorioPrimeraFase"
import Separador from "@/components/Separador"
import { useState } from "react"

export interface GanadoresGrupo {
  A: string //id del pais
  B: string
  C: string
  D: string
}

export default function App() {
  const [primerosGrupo, setPrimerosGrupo] = useState<GanadoresGrupo>({ A: "", B: "", C: "", D: "" })
  const [segundosGrupo, setSegundosGrupo] = useState<GanadoresGrupo>({ A: "", B: "", C: "", D: "" })

  const opcionesSemiFinalUno = [primerosGrupo.A, segundosGrupo.B, primerosGrupo.B, segundosGrupo.A]
  const opcionesSemiFinalDos = [primerosGrupo.D, segundosGrupo.C, primerosGrupo.C, segundosGrupo.D]

  const [opcionesFinalUno, setOpcionesFinalUno] = useState<string[]>([])
  const [opcionesFinalDos, setOpcionesFinalDos] = useState<string[]>([])

  return (
    <>
      <Grupos setPrimeros={setPrimerosGrupo} setSegundos={setSegundosGrupo} />

      <div className="grid grid-cols-3 relative gap-1 mb-12">
        {/* Cuartos de Final */}
        {/**********************************/}
        <div className="flex flex-col gap-2">
          <h2 className="text-slate-300">Cuartos de Final</h2>
          <PartidoEliminatorioPrimeraFase
            equipo1Id={primerosGrupo.A}
            equipo2Id={segundosGrupo.B}
            footer={"1°A vs. 2°B"}
          />
          <PartidoEliminatorioPrimeraFase
            equipo1Id={primerosGrupo.B}
            equipo2Id={segundosGrupo.A}
            footer={"1°B vs. 2°A"}
          />
          <Separador />
          <PartidoEliminatorioPrimeraFase
            equipo1Id={primerosGrupo.D}
            equipo2Id={segundosGrupo.C}
            footer={"1°D vs. 2°C"}
          />
          <PartidoEliminatorioPrimeraFase
            equipo1Id={primerosGrupo.C}
            equipo2Id={segundosGrupo.D}
            footer={"1°C vs. 2°D"}
          />
        </div>

        {/* Semifinales */}
        {/**********************************/}
        <div className="flex flex-col gap-2 justify-evenly pt-2">
          <h2 className="absolute top-6 text-slate-300">Semifinales</h2>
          <PartidoEliminatorio
            opciones={opcionesSemiFinalUno}
            setOpcionesFinal={setOpcionesFinalUno}
          />
          <PartidoEliminatorio
            opciones={opcionesSemiFinalDos}
            setOpcionesFinal={setOpcionesFinalDos}
          />
        </div>

        {/* Final */}
        {/**********************************/}
        <div className="flex flex-col gap-2 justify-center">
          <h2 className="text-slate-300">Final</h2>
          <PartidoEliminatorio
            opciones={[...opcionesFinalUno, ...opcionesFinalDos]}
            setOpcionesFinal={() => {}}
          />
        </div>
      </div>
    </>
  )
}
