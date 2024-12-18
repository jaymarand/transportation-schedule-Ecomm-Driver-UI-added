export const formatDateTime = (date: Date): string => {
  return date.toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

export const getCurrentDateTime = (): string => {
  return formatDateTime(new Date());
};

export const getCurrentTime = (): string => {
  return new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};