export const getWaterNorm = (gender, weight, timeActive) => {
    if (weight === null || timeActive === null) {
        return '0';
    }

    // Convert timeActive from minutes to hours
    const timeActiveInHours = timeActive / 60;

    let value;
    if (gender === 'Male') {
        value = Number(weight) * 0.04 + Number(timeActiveInHours) * 0.6;
    } else {
        value = Number(weight) * 0.03 + Number(timeActiveInHours) * 0.4;
    }

    return value.toFixed(1);
};
