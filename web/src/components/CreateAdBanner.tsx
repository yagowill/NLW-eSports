import * as Dialog from '@radix-ui/react-dialog'
import { MagnifyingGlassPlus } from 'phosphor-react'
interface CreateAdBannerProps {
    
}

export function CreateAdBanner() {
    return (
        <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-7 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-4 flex justify-between items-center'>
          <div>
            <strong className='text-white text-lg font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 text-sm block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <Dialog.Trigger className='py-2 px-3 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={22}/>
            Publica anúncio
          </Dialog.Trigger>

        </div>     
      </div>
    )
}