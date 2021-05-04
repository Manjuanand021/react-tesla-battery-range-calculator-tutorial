import { counterDefaultVal } from '../constants/counterDefaultVal';

export const speedUp = (value) => ({
    type: 'SPEED_UP',
    value,
    step: counterDefaultVal.speed.step,
    maxValue: counterDefaultVal.speed.max,
});

export const speedDown = (value) => ({
    type: 'SPEED_DOWN',
    value,
    step: counterDefaultVal.speed.step,
    minValue: counterDefaultVal.speed.min,
});
export const temperatureUp = (value) => {
    return {
        type: 'TEMPERATURE_UP',
        value,
        step: counterDefaultVal.temperature.step,
        maxValue: counterDefaultVal.temperature.max,
    };
};
export const temperatureDown = (value) => {
    return {
        type: 'TEMPERATURE_DOWN',
        value,
        step: counterDefaultVal.temperature.step,
        minValue: counterDefaultVal.temperature.min,
    };
};
export const changeClimate = () => ({
    type: 'CHANGE_CLIMATE',
});
export const changeWheel = () => ({
    type: 'CHANGE_WHEEL',
});
export const updateStats = () => {
    return {
        type: 'UPDATE_STATS',
    };
};
