import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";

function LearningPage() {
  const { keyword } = useParams()
  const [video, setVideo] = useState({})
  const [images, setImages] = useState([])
  const formattedKeyword = keyword[0].toUpperCase() + keyword.slice(1).toLowerCase()

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/learning_resources?country=${keyword}`)
      .then(response => response.json())
      .then(data => {
        setVideo(data.data.attributes.video)
        setImages(data.data.attributes.images)
      })
  }, [])

  console.log(video)

  return(
    <>
      <h1>{formattedKeyword}</h1>
      <YoutubeEmbed embedId={video.youtube_video_id}/>
    </>
  )

}

export default LearningPage