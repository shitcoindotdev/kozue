import { useEffect, useRef } from 'react'

const InstaEmbed = ({ url }) => {
	const embedContainer = useRef(null)

	useEffect(() => {
		if (window.instgrm) {
			window.instgrm.Embeds.process()
		}
	}, [])

	useEffect(() => {
		const script = document.createElement('script')
		script.async = true
		script.defer = true
		script.src = 'https://www.instagram.com/embed.js'
		embedContainer.current.appendChild(script)
	}, [url])

	return (
		<div ref={embedContainer} className="my-4">
			<blockquote
				className="instagram-media"
				data-instgrm-permalink={url}
				data-instgrm-version="14"
				style={{
					background: '#FFF',
					boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
					margin: '1px',
					maxWidth: '540px',
					minWidth: '326px',
					padding: '0',
					width: '99.375%',
					width: '-webkit-calc(100% - 2px)',
					width: 'calc(100% - 2px)',
				}}
			></blockquote>
		</div>
	)
}

export default InstaEmbed
