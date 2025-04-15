"use client"
import React, { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PropTypes from 'prop-types'

/**
 * Animation Component
 * 
 * Available animation types:
 * 1. slideIn - Slides content in from the right
 * 2. slideInLeft - Slides content in from the left
 * 3. slideInUp - Slides content in from the bottom
 * 4. slideInDown - Slides content in from the top
 * 5. fadeIn - Fades content in
 * 6. scaleIn - Scales content up while fading in
 * 7. scaleInDown - Scales content down while fading in
 * 8. rotateIn - Rotates content in
 * 9. bounceIn - Bounces content in
 * 10. flipInX - Flips content in on X-axis
 * 11. flipInY - Flips content in on Y-axis
 * 12. zoomIn - Zooms content in
 * 13. zoomOut - Zooms content out
 * 14. pulse - Creates a pulsing effect
 * 15. shake - Creates a shaking effect
 * 16. float - Creates a floating effect
 * 17. wave - Creates a wave-like motion
 * 18. morph - Morphs between shapes
 * 19. glow - Creates a glowing effect
 * 20. spotlight - Creates a spotlight effect
 * 21. reveal - Reveals content with a mask
 * 22. splitText - Splits and animates text
 * 23. parallax - Creates a parallax effect
 * 24. stagger - Staggers multiple elements
 * 25. morphText - Morphs text between states
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.animationType - Type of animation to apply
 * @param {React.RefObject} props.triggerElement - Optional trigger element
 * @param {number} props.duration - Animation duration in seconds (default: 1)
 * @param {number} props.delay - Animation delay in seconds (default: 0)
 * @param {string} props.ease - Easing function (default: "power2.out")
 */

const Animation = ({ 
    children, 
    animationType = 'fadeIn', 
    triggerElement = null,
    duration = 1,
    delay = 0,
    ease = "power2.out"
}) => {
    const elementRef = useRef(null)
    const triggerRef = useRef(triggerElement)
    const animationRef = useRef(null)
    const splitTextRefs = useRef([])

    const cleanupAnimation = useCallback(() => {
        if (animationRef.current) {
            animationRef.current.kill()
            animationRef.current = null
        }
        
        // Cleanup split text animation
        if (splitTextRefs.current.length > 0) {
            splitTextRefs.current.forEach(ref => {
                if (ref) ref.kill()
            })
            splitTextRefs.current = []
        }
    }, [])

    useEffect(() => {
        try {
            gsap.registerPlugin(ScrollTrigger)
            
            const setupAnimation = () => {
                const commonConfig = {
                    scrollTrigger: {
                        trigger: triggerRef.current || elementRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: false,
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: true,
                        markers: false
                    }
                }

                switch (animationType) {
                    case 'slideIn':
                        gsap.set(elementRef.current, { 
                            x: '100%', 
                            opacity: 0,
                            position: 'relative'
                        })
                        return gsap.to(elementRef.current, {
                            x: '0%',
                            opacity: 1,
                            duration,
                            delay,
                            ease,
                            ...commonConfig
                        })

                    case 'slideInLeft':
                        gsap.set(elementRef.current, { 
                            x: '-100%', 
                            opacity: 0,
                            position: 'relative'
                        })
                        return gsap.to(elementRef.current, {
                            x: '0%',
                            opacity: 1,
                            duration,
                            delay,
                            ...commonConfig
                        })

                    case 'slideInUp':
                        gsap.set(elementRef.current, { 
                            y: '100%', 
                            opacity: 0,
                            position: 'relative'
                        })
                        return gsap.to(elementRef.current, {
                            y: '0%',
                            opacity: 1,
                            duration,
                            delay,
                            ...commonConfig
                        })

                    case 'slideInDown':
                        gsap.set(elementRef.current, { 
                            y: '-100%', 
                            opacity: 0,
                            position: 'relative'
                        })
                        return gsap.to(elementRef.current, {
                            y: '0%',
                            opacity: 1,
                            duration,
                            delay,
                            ...commonConfig
                        })

                    case 'fadeIn':
                        gsap.set(elementRef.current, { 
                            opacity: 0,
                            position: 'relative'
                        })
                        return gsap.to(elementRef.current, {
                            opacity: 1,
                            duration,
                            delay,
                            ...commonConfig
                        })

                    case 'scaleIn':
                        gsap.set(elementRef.current, { scale: 0.8, opacity: 0 })
                        return gsap.to(elementRef.current, {
                            scale: 1,
                            opacity: 1,
                            duration,
                            delay,
                            ...commonConfig
                        })

                    case 'scaleInDown':
                        gsap.set(elementRef.current, { scale: 1.2, opacity: 0 })
                        return gsap.to(elementRef.current, {
                            scale: 1,
                            opacity: 1,
                            duration,
                            delay,
                            ...commonConfig
                        })

                    case 'rotateIn':
                        gsap.set(elementRef.current, { rotation: -180, opacity: 0 })
                        return gsap.to(elementRef.current, {
                            rotation: 0,
                            opacity: 1,
                            duration,
                            delay,
                            ...commonConfig
                        })

                    case 'bounceIn':
                        gsap.set(elementRef.current, { scale: 0.3, opacity: 0 })
                        return gsap.to(elementRef.current, {
                            scale: 1,
                            opacity: 1,
                            duration,
                            delay,
                            ease: "bounce.out",
                            ...commonConfig
                        })

                    case 'flipInX':
                        gsap.set(elementRef.current, { rotationX: 90, opacity: 0 })
                        return gsap.to(elementRef.current, {
                            rotationX: 0,
                            opacity: 1,
                            duration,
                            delay,
                            ...commonConfig
                        })

                    case 'flipInY':
                        gsap.set(elementRef.current, { rotationY: 90, opacity: 0 })
                        return gsap.to(elementRef.current, {
                            rotationY: 0,
                            opacity: 1,
                            duration,
                            delay,
                            ...commonConfig
                        })

                    case 'zoomIn':
                        gsap.set(elementRef.current, { scale: 0.3, opacity: 0 })
                        return gsap.to(elementRef.current, {
                            scale: 1,
                            opacity: 1,
                            duration,
                            delay,
                            ...commonConfig
                        })

                    case 'zoomOut':
                        gsap.set(elementRef.current, { scale: 1.5, opacity: 0 })
                        return gsap.to(elementRef.current, {
                            scale: 1,
                            opacity: 1,
                            duration,
                            delay,
                            ...commonConfig
                        })

                    case 'pulse':
                        return gsap.to(elementRef.current, {
                            scale: 1.1,
                            duration: 0.5,
                            yoyo: true,
                            repeat: -1,
                            ease: "power1.inOut",
                            ...commonConfig
                        })

                    case 'shake':
                        return gsap.to(elementRef.current, {
                            x: '+=10',
                            duration: 0.1,
                            yoyo: true,
                            repeat: 5,
                            ease: "power1.inOut",
                            ...commonConfig
                        })

                    case 'float':
                        return gsap.to(elementRef.current, {
                            y: '-=20',
                            duration: 2,
                            yoyo: true,
                            repeat: -1,
                            ease: "sine.inOut",
                            ...commonConfig
                        })

                    case 'wave':
                        return gsap.to(elementRef.current, {
                            rotation: 5,
                            duration: 1,
                            yoyo: true,
                            repeat: -1,
                            ease: "sine.inOut",
                            ...commonConfig
                        })

                    case 'morph':
                        gsap.set(elementRef.current, { scale: 0.8, opacity: 0 })
                        return gsap.to(elementRef.current, {
                            scale: 1,
                            opacity: 1,
                            duration,
                            delay,
                            ease: "elastic.out(1, 0.3)",
                            ...commonConfig
                        })

                    case 'glow':
                        return gsap.to(elementRef.current, {
                            boxShadow: "0 0 20px rgba(255,255,255,0.8)",
                            duration: 1.5,
                            yoyo: true,
                            repeat: -1,
                            ease: "sine.inOut",
                            ...commonConfig
                        })

                    case 'spotlight':
                        gsap.set(elementRef.current, { opacity: 0 })
                        return gsap.to(elementRef.current, {
                            opacity: 1,
                            duration,
                            delay,
                            ease: "power2.inOut",
                            ...commonConfig
                        })

                    case 'reveal':
                        gsap.set(elementRef.current, { clipPath: "inset(0 100% 0 0)" })
                        return gsap.to(elementRef.current, {
                            clipPath: "inset(0 0 0 0)",
                            duration,
                            delay,
                            ease,
                            ...commonConfig
                        })

                    case 'splitText':
                        if (!elementRef.current) return null
                        
                        const text = elementRef.current.textContent
                        if (!text) return null
                        
                        elementRef.current.textContent = ""
                        const chars = text.split("")
                        
                        chars.forEach((char, i) => {
                            const span = document.createElement("span")
                            span.textContent = char
                            span.style.display = "inline-block"
                            gsap.set(span, { opacity: 0, y: 20 })
                            elementRef.current.appendChild(span)
                            
                            const tween = gsap.to(span, {
                                opacity: 1,
                                y: 0,
                                duration: 0.5,
                                delay: i * 0.05,
                                ease,
                                ...commonConfig
                            })
                            
                            splitTextRefs.current.push(tween)
                        })
                        return null

                    case 'parallax':
                        return gsap.to(elementRef.current, {
                            y: "30%",
                            duration: 1,
                            ease: "none",
                            ...commonConfig
                        })

                    case 'stagger':
                        if (!elementRef.current || !elementRef.current.children) return null
                        
                        const elements = Array.from(elementRef.current.children)
                        return gsap.from(elements, {
                            opacity: 0,
                            y: 50,
                            duration: 0.5,
                            stagger: 0.1,
                            ease,
                            ...commonConfig
                        })

                    case 'morphText':
                        const originalText = elementRef.current.textContent
                        const morphText = "New Text"
                        return gsap.to(elementRef.current, {
                            text: morphText,
                            duration: 1,
                            ease: "power2.inOut",
                            ...commonConfig
                        })

                    default:
                        console.warn(`Unknown animation type: ${animationType}`)
                        return null
                }
            }

            cleanupAnimation()
            animationRef.current = setupAnimation()

            return cleanupAnimation
        } catch (error) {
            console.error('Animation error:', error)
            return cleanupAnimation
        }
    }, [animationType, duration, delay, ease, cleanupAnimation])

    return (
        <div ref={elementRef} style={{ position: 'relative' }}>
            {children}
        </div>
    )
}

Animation.propTypes = {
    children: PropTypes.node.isRequired,
    animationType: PropTypes.string,
    triggerElement: PropTypes.object,
    duration: PropTypes.number,
    delay: PropTypes.number,
    ease: PropTypes.string
}

export default Animation