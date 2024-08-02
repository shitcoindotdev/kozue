// components/UniswapWidget.js
import React from 'react'
import PropTypes from 'prop-types'

const UniswapWidget = ({ contractAddress }) => {
	const uniswapUrl = `https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=${contractAddress}&theme=light`

	return (
		<iframe
			src={uniswapUrl}
			height="660px"
			width="100%"
			style={{ border: '0', margin: '0 auto', display: 'block', borderRadius: '10px', maxWidth: '500px' }}
			title="Uniswap Widget"
		/>
	)
}

UniswapWidget.propTypes = {
	contractAddress: PropTypes.string.isRequired,
}

export default UniswapWidget
