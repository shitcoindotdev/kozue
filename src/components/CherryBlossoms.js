import React, { useEffect } from 'react'

const CherryBlossoms = () => {
	useEffect(() => {
		const createBlossom = () => {
			const blossom = document.createElement('div')
			blossom.className = 'blossom'
			blossom.style.left = `${Math.random() * window.innerWidth}px`
			document.body.appendChild(blossom)

			setTimeout(() => {
				blossom.style.top = `${window.innerHeight}px`
				blossom.style.transform = `rotate(${Math.random() * 360}deg)`
				blossom.style.opacity = '0'
			}, 100)

			setTimeout(() => {
				blossom.remove()
			}, 10000)
		}
		const randomInterval = Math.floor(Math.random() * (350 - 150 + 1)) + 150
		const interval = setInterval(createBlossom, randomInterval)

		return () => clearInterval(interval)
	}, [])

	return null
}

export default CherryBlossoms
