import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const UniswapWidget = ({ contractAddress }) => {
	const [isInView, setIsInView] = useState(false)
	const widgetRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0]
				if (entry.isIntersecting) {
					setIsInView(true)
					observer.disconnect() // stop observing once it's in view
				}
			},
			{ threshold: 0.5 }, // adjust this value as needed
		)

		if (widgetRef.current) {
			observer.observe(widgetRef.current)
		}

		return () => {
			if (observer && widgetRef.current) {
				observer.unobserve(widgetRef.current)
			}
		}
	}, [])

	const uniswapUrl = isInView
		? `https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=${isInView ? contractAddress : ''}&theme=light`
		: ''

	return (
		<iframe
			ref={widgetRef}
			src={uniswapUrl}
			height="660px"
			className="backdrop-blur-sm"
			width="100%"
			style={{
				border: '0',
				margin: '0 auto',
				display: 'block',
				borderRadius: '10px',
				opacity: 0.9,
				maxWidth: '360px',
				maxHeight: '360px',
			}}
			title="Uniswap Widget"
		/>
	)
}

UniswapWidget.propTypes = {
	contractAddress: PropTypes.string.isRequired,
}

export default UniswapWidget
