interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
    return (
        <a href="" className="relative rounded-lg overflow-hidden">
          <img className="w-44" src={props.bannerUrl} alt="" />

          <div className='w-ful pt-16 pb-4 px-3 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-sm text-white block'>{props.title}</strong>
            <span className='text-zinc-300 text-xs block'>{props.adsCount} anúncio(s)</span>
          </div>
        </a>
    )
}