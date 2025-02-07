"use client"

import { useEffect, useState } from "react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = (): void => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => toggleVisibility()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [toggleVisibility])

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn bg-darkblue text-white rounded-circle position-fixed bottom-0 end-0 me-4 mb-4 d-flex align-items-center justify-content-center"
          style={{
            width: "45px",
            height: "45px",
            zIndex: 1000,
            transition: "all 0.3s ease",
          }}
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  )
}

