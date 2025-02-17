import type React from "react"

interface PlaceholderImageProps {
  width: number
  height: number
  text: string
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ width, height, text }) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "#B3A369",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#003057",
        fontWeight: "bold",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      {text}
    </div>
  )
}

export default PlaceholderImage

