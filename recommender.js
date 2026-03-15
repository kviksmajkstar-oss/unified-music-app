function recommend(history) {

  const scores = {}

  history.forEach(track => {

    const genre = track.genre || "unknown"

    if(!scores[genre]) scores[genre] = 0

    scores[genre] += 1
  })

  const sorted = Object.entries(scores)
      .sort((a,b)=>b[1]-a[1])

  return sorted[0]?.[0] || null
}

module.exports = recommend
