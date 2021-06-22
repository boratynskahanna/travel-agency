export const formatTime = (arg) => {
  if (arg === 'undefined' || isNaN(arg) || arg < 0) {
    return null;
  }

  const seconds = (Math.floor(arg % 60) + '').padStart(2, '0');
  const minutes = (Math.floor((arg / 60) % 60) + '').padStart(2, '0');
  const hours = (Math.floor(arg / 3600) + '').padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
};