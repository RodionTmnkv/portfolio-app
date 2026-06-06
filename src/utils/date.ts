import dayjs from 'dayjs';

export const DATE_FORMAT = 'DD.MM.YYYY';

export const MIN_AGE = 14;
export const MAX_AGE = 100;

export const getMinBirthDate = () => dayjs().subtract(MAX_AGE, 'year');

export const getMaxBirthDate = () => dayjs().subtract(MIN_AGE, 'year');

export const formatDate = (date: dayjs.Dayjs | null): string => {
    if (!date || !date.isValid()) {
        return '';
    }
    return date.format(DATE_FORMAT);
};
