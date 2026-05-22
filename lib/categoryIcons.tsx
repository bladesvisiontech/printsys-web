import { Zap, Printer, Tag, Cylinder, ScanLine, Droplets } from 'lucide-react'

export const categoryIconMap: Record<string, React.ReactNode> = {
  'curado-uv':          <Zap className="w-5 h-5" />,
  'prensas-flexo':      <Printer className="w-5 h-5" />,
  'maquinas-etiquetas': <Tag className="w-5 h-5" />,
  'cilindros':          <Cylinder className="w-5 h-5" />,
  'instrumentos':       <ScanLine className="w-5 h-5" />,
  'consumibles':        <Droplets className="w-5 h-5" />,
}

export const categoryIconLg: Record<string, React.ReactNode> = {
  'curado-uv':          <Zap className="w-7 h-7" />,
  'prensas-flexo':      <Printer className="w-7 h-7" />,
  'maquinas-etiquetas': <Tag className="w-7 h-7" />,
  'cilindros':          <Cylinder className="w-7 h-7" />,
  'instrumentos':       <ScanLine className="w-7 h-7" />,
  'consumibles':        <Droplets className="w-7 h-7" />,
}
