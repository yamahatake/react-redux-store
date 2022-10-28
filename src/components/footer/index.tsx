import type { FC } from 'react'

export type FooterProps = {

}

export const Footer: FC<FooterProps> = () => (
  <footer className='flex justify-center items-center mt-10 pt-5 pb-5 border-t-2 pr-3 pl-3'>
    <div className='max-w-screen-xl w-full'>
      © 2022 Corporation. All rights reserved. All trademarks are property of their respective owners  Privacy Policy   |   Legal   |   Steam Subscriber Agreement   |   Refunds   |   Cookies
    </div>
  </footer>
)
