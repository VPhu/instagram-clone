export function getClearTime(dateString) {
    const now = new Date()
    const postDate = new Date(dateString)
    const timeDifferenceMs = now - postDate
    const timeDifference = Math.floor(timeDifferenceMs/1000)

    if(timeDifference<10) return "Now"
    if(timeDifference<60) return `${timeDifference} second ago`

    const timeDifferenceMinutes = Math.floor(timeDifference/60)
    if(timeDifferenceMinutes<60) return `${timeDifferenceMinutes} minutes ago`

    const timeDifferenceHours = Math.floor(timeDifferenceMinutes/60)
    if(timeDifferenceHours<24) return `${timeDifferenceHours} hours ago`

    const timeDifferenceDays = Math.floor(timeDifferenceHours/24)
    if(timeDifferenceDays<7) return `${timeDifferenceDays} days ago`

    const timeDifferenceWeeks = Math.floor(timeDifferenceDays/7)
    return `${timeDifferenceWeeks} weeks ago`
}
