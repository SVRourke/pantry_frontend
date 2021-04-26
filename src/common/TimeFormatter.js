const ageFormatter = (age, num) => {
  const humanizeDuration = require("humanize-duration")
  return (
    humanizeDuration(
      age, 
      { 
        units: ["y", "mo", "w", "d", "h", "m", "s"],
        unitMeasures : {
          y:  31536000,
          mo: 2160000,
          w:  432000,
          d:  64800,
          h:  3000,
          m:  45,
          s:  1
        },
        largest: num,
        round: true
      }
    )
  )
}

export default ageFormatter