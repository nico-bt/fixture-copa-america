export interface Pais {
  id: string
  pais: string
  bandera: string
  grupo: string
}

export const grupos = ["A", "B", "C", "D"]

export const paises: Pais[] = [
  { id: "01", pais: "Argentina", bandera: "/img/01.png", grupo: "A" },
  { id: "02", pais: "Perú", bandera: "/img/02.png", grupo: "A" },
  { id: "03", pais: "Chile", bandera: "/img/03.png", grupo: "A" },
  { id: "04", pais: "Canadá", bandera: "/img/04.png", grupo: "A" },
  { id: "05", pais: "México", bandera: "/img/05.png", grupo: "B" },
  { id: "06", pais: "Ecuador", bandera: "/img/06.png", grupo: "B" },
  { id: "07", pais: "Venezuela", bandera: "/img/07.png", grupo: "B" },
  { id: "08", pais: "Jamaica", bandera: "/img/08.png", grupo: "B" },
  { id: "09", pais: "Estados Unidos", bandera: "/img/09.png", grupo: "C" },
  { id: "10", pais: "Uruguay", bandera: "/img/10.png", grupo: "C" },
  { id: "11", pais: "Panamá", bandera: "/img/11.png", grupo: "C" },
  { id: "12", pais: "Bolivia", bandera: "/img/12.png", grupo: "C" },
  { id: "13", pais: "Brasil", bandera: "/img/13.png", grupo: "D" },
  { id: "14", pais: "Colombia", bandera: "/img/14.png", grupo: "D" },
  { id: "15", pais: "Paraguay", bandera: "/img/15.png", grupo: "D" },
  { id: "16", pais: "Costa Rica", bandera: "/img/16.png", grupo: "D" },
]
