import React from "react"

const WatermarkHeading = (props: { className?: string; children: React.ReactNode }) => {
  return <div className={`heading heading--watermark ${props.className || ""}`}>{props.children}</div>
}

export default WatermarkHeading
