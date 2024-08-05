import Image from 'next/image'
import { Cherry_Swash } from 'next/font/google'
import Links from '@/components/Links'
import kozue1 from '/public/kozue1.jpg'
import kozue2 from '/public/kozue2.jpg'
import kozue3 from '/public/kozue3.jpg'
import kozue4 from '/public/kozue4.jpg'
import kozue5 from '/public/kozue5.jpg'
import kozuedm from '/public/kozuedm.jpeg'
import Copyaddress from '@/components/Copyaddress'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import CherryBlossoms from '@/components/CherryBlossoms'
import CherryBlossomsTop from '/public/cherryblossoms.png'
import UniswapWidget from '@/components/UniswapWidget'
import Typewriter from '@/components/Typewriter'
import uniswap from '/public/uniswap.svg'

const InstaEmbed = dynamic(() => import('@/components/InstaEmbed'), {
	ssr: false,
})

const cherry = Cherry_Swash({ subsets: ['latin'], weight: ['400', '700'], style: ['normal'] })

export default function Home() {
	useEffect(() => {
		const script = document.createElement('script')
		script.async = true
		script.src = '//www.instagram.com/embed.js'
		document.body.appendChild(script)
		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return (
		<main
			className={`shiba-gradient relative z-10 flex min-h-dvh w-full flex-col items-center gap-10 overflow-x-hidden pb-20 text-[20px] text-black/60 sm:px-8 ${cherry.className}`}
		>
			<div className="fadeIn relative flex w-full justify-center">
				<h1 className="gradient-text relative z-20 font-bold">$Kozue</h1>
				<h2 className="gradient-text absolute -bottom-5 z-20 font-bold">Neiro's cute sister</h2>
			</div>
			<CherryBlossoms />
			<Image className="fade absolute top-0 z-[-1] w-full -translate-y-1/4" src={CherryBlossomsTop} width={400} />
			<div className="relative z-20 flex w-full justify-evenly sm:justify-center sm:gap-6">
				<div className="fadeIn w-[30vw] max-w-[420px] rounded-xl">
					<Image width={300} className="rotating-element rounded-xl shadow-xl md:w-full" src={kozue1} />
				</div>
				<div className="fadeIn w-[30vw] max-w-[420px] rounded-xl">
					<Image width={300} className="rotating-element rounded-xl shadow-xl md:w-full" src={kozue2} />
				</div>
				<div className="fadeIn w-[30vw] max-w-[420px] rounded-xl">
					<Image width={300} className="rotating-element rounded-xl shadow-xl md:w-full" src={kozue3} />
				</div>
			</div>
			<div className="fadeIn relative flex w-full justify-center py-4">
				<Copyaddress
					className={'text-pink-400/50'}
					contractAddress={'0xf8bef12b93d0b56e508efc1c4E5a056c2508e047'}
				/>
				<Typewriter
					speed={50}
					delay={1500}
					className={
						'opacity-8 absolute -bottom-2 text-[12px] font-bold text-pink-400/70 md:-bottom-4 md:text-[16px]'
					}
					text={'click to copy CA'}
				/>
			</div>
			<a
				target="_blank"
				href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xf8bef12b93d0b56e508efc1c4E5a056c2508e047"
				className="fadeIn flex gap-2 rounded-xl bg-pink-400/85 px-8 py-3 text-[20px] tracking-tight text-white shadow-lg backdrop-blur-sm transition-all duration-150 ease-in-out hover:scale-[1.025] hover:bg-pink-400"
				rel="noopener noreferrer"
			>
				Buy some $Kozue! <Image src={uniswap} />
			</a>
			<div className="fadeIn mx-8 flex max-w-[600px] flex-col gap-6 text-center text-[16px] sm:text-[20px]">
				<p>
					Kozue is the sister of Neiro, who got adopted by&nbsp;
					<a
						target="_blank"
						className="pointer-cursor"
						href="https://www.instagram.com/kabosumama?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
						rel="noopener noreferrer"
					>
						@kabosumama
					</a>
					.
				</p>
				<p>
					Kozue and Neiro are siblings by blood and share the same sad past of being left in a dogshelter
					together. Fast forwards to today, Kozue and Neiro are happier than ever and have both found a new
					forever home.
					<br />
					<br />
					Kozue, meaning <span className="italic">"the top of the tree"</span> is now ready to reach new
					heights and to stay as one of Ethereums cutest Shiba-Inus
				</p>
			</div>
			<div className="flex w-full justify-center px-4">
				<Image width={600} className="w-full max-w-[800px] rounded-xl" src={kozuedm} />
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:items-start md:gap-8">
				<InstaEmbed url={'https://www.instagram.com/p/CgtD6FHvMBm/?img_index=1'} />
				<UniswapWidget contractAddress="0xf8bef12b93d0b56e508efc1c4E5a056c2508e047" />
			</div>
			<Image width={400} className="h-auto w-[400px] max-w-[69%] rounded-lg shadow-lg" src={kozue4} />

			<p className="text-[16px] sm:text-[20px]">Stay up to date with $Kozue 🐕</p>
			<Links
				xLink={'https://x.com/Kozueoneth'}
				TgLink={'https://t.me/Kozueoneth'}
				DextLink={
					'https://www.dextools.io/app/en/ether/pair-explorer/0x9e9bf5c5eb887b848fc4105e0e56d523a41f922b?t=1722614427555'
				}
				DexsLink={'https://dexscreener.com/ethereum/0x9e9bf5c5eb887b848fc4105e0e56d523a41f922b'}
				className={
					'fadeInUp shibfade fixed bottom-4 z-20 rounded-full px-4 py-2 shadow-md backdrop-blur-sm md:mx-auto'
				}
			/>
		</main>
	)
}
