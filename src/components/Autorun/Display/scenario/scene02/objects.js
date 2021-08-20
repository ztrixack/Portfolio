import tw from 'twin.macro'
import { FRAME_RATE } from 'configs/constant'

export const me = [
  {
    label: 'start',
    anim: 'flick',
    configs: { loop: 50 * FRAME_RATE, changeRate: FRAME_RATE / 2 },
    options: { model: 'hologram_freeze' },
  },
]

export const messages = [
  {
    anim: 'typing',
    configs: { addStartTime: FRAME_RATE / 2, addX: -10, addY: -5, changeRate: 2 * FRAME_RATE, freeze: 10 * FRAME_RATE },
    options: {
      messages: [
        'Experiences (1/4)',
        '',
        '@ Silicon Craft Technology PLC',
        '> Lead Product Engineer [08/2020 – present]',
        ' - Take care the 6 current NFC IC chips.',
        ' - Research and scount the new HF product.',
        ' - ',
        '',
        '> Lead Embedded System Engineer [04/2020 – 07/2020]',
        ' - Take care the 6 current NFC IC chips.',
        ' - Take care the 6 current NFC IC chips.',
        ' - ',
        '',
      ],
      styles: [
        tw`text-purple-300`,
        ,
        tw`text-green-300`,
        tw`text-blue-300`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        ,
        tw`text-blue-300`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
      ],
    },
    labelAt: 'start',
  },
  {
    anim: 'typing',
    configs: { addStartTime: FRAME_RATE / 2, changeRate: 2 * FRAME_RATE, freeze: 10 * FRAME_RATE },
    options: {
      messages: [
        'Experiences (2/4)',
        '',
        '@Ever Medical Technologies',
        '> Lead Full Stack Developer [11/2018 – 02/2020]',
        ' - ',
        ' - ',
        ' - ',
        ' - ',
        ' - ',
        ' - ',
      ],
      styles: [
        tw`text-purple-300`,
        ,
        tw`text-green-300`,
        tw`text-blue-300`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
      ],
    },
  },
  {
    anim: 'typing',
    configs: { addStartTime: FRAME_RATE / 2, changeRate: 2 * FRAME_RATE, freeze: 10 * FRAME_RATE },
    options: {
      messages: [
        'Experiences (3/4)',
        '',
        'Freelance',
        '> Software Developer [05/2018 - 10/2018]',
        ' - Tag configuration software',
        ' - Image matching detection library',
        ' - SPA Frontend for managing the FPGA info',
        ' - POS microservices',
        ' - NFC android library and application',
      ],
      styles: [
        tw`text-purple-300`,
        ,
        tw`text-green-300`,
        tw`text-blue-300`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
      ],
    },
  },
  {
    anim: 'typing',
    configs: { addStartTime: FRAME_RATE / 2, changeRate: 2 * FRAME_RATE, freeze: 10 * FRAME_RATE },
    options: {
      messages: [
        'Experiences (4/4)',
        '',
        '@Silicon Craft Technology PLC',
        '> Senior Embedded System Engineer [07/2017 – 04/2018]',
        ' - Research the new product of NFC technology field.',
        ' - Create the NFC streaming library for Android OS.',
        ' - Create and deploy the decoded server on Azure.',
        '',
        '> Embedded System Engineer [04/2013 – 06/2017]',
        ' - Design schematics, BOMs and assembly product.',
        ' - Create firmware for 4, 8, 16 and 32-bit MCU.',
        ' - Create the android guide and example code.',
      ],
      styles: [
        tw`text-purple-300`,
        ,
        tw`text-green-300`,
        tw`text-blue-300`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        ,
        tw`text-blue-300`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
        tw`italic text-gray-100`,
      ],
    },
  },
]

export default [...me, ...messages]
