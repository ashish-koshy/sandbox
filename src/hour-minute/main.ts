export const hourMinute = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds / 60) % 60);
    return `${seconds} --> "${hours} hour(s) and ${minutes} minute(s)"`;
};
