import { ICard } from '../types'
import Heart from '@images/info-cards/heart.svg'
import Human from '@images/info-cards/human.svg'

export const mockInfoCards: ICard[] = [
  {
    Svg: Heart,
    text_normal_jsx: (
      <>
        пациентов с{' '}
        <span>
          сердечной недостаточностью<sup>1</sup>
        </span>
      </>
    ),
    text_percent: '45,5%',
    text_slim: 'Популяционное когортное исследование (N=385)',
  },
  {
    Svg: Human,
    text_normal_jsx: (
      <>
        пациентов с{' '}
        <span>
          инфарктом миокарда<sup>1</sup>
        </span>
      </>
    ),
    text_percent: '55,3%',
    text_slim: 'Апостериорный анализ когортного исследования (N=2887)',
  },
  {
    Svg: Heart,
    text_normal_jsx: (
      <>
        пациентов с <span>раком мочевого пузыря</span>
      </>
    ),
    text_percent: '50,5%',
    text_slim: 'Исследование Национальной статистической службы (N=42642)',
  },
]
