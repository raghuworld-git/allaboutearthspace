export const launchStatusIndicator = (status) => {
    switch (status) {
        case 'TBD':
        case 'TBC':
            return 'orange';
        case 'Go':
        case 'Success':
            return 'green';
        case 'Failure':
        case 'Partial Failure':
            return 'red';
        case 'Hold':
        case 'In Flight':
            return 'yellow';
        default:
            return ''
    }
}

export const getFormattedDateTime = (datetime) => {
    try {
        const jsDate = new Date(datetime);
        const formattedDate = `${formatNumber(jsDate.getMonth())}/${formatNumber(jsDate.getDate())}/${formatNumber(jsDate.getFullYear())} ${formatNumber(jsDate.getHours())}:${formatNumber(jsDate.getMinutes())}:${formatNumber(jsDate.getSeconds())}`

        return formattedDate;
    } catch {
        return "--:--:-- --:--:--";
    }
}

export const formatNumber = (num) => {
    if (!num) {
        return '00'
    }
    return num.toString().length === 1 ? `0${num}` : num;
}