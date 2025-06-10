export function getTimeSince(dateString) {
    const now = new Date()
    const postDate = new Date(dateString)
    const timeDifferenceMs = now - postDate
    const timeDifference = Math.floor(timeDifferenceMs/1000)

    if(timeDifference<10) return "Now"
    if(timeDifference<60) return `${timeDifference}s`

    const timeDifferenceMinutes = Math.floor(timeDifference/60)
    if(timeDifferenceMinutes<60) return `${timeDifferenceMinutes}m`

    const timeDifferenceHours = Math.floor(timeDifferenceMinutes/60)
    if(timeDifferenceHours<24) return `${timeDifferenceHours}h`

    const timeDifferenceDays = Math.floor(timeDifferenceHours/24)
    if(timeDifferenceDays<7) return `${timeDifferenceDays}d`

    const timeDifferenceWeeks = Math.floor(timeDifferenceDays/7)
    return `${timeDifferenceWeeks}w`
}
