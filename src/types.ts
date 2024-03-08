export interface ICard {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  text_percent: string
  text_normal_jsx: JSX.Element
  text_slim: string
}

export interface IDrugCard {
  title?: JSX.Element
  text: JSX.Element
  number?: number
}
