

function formatToTwoDigits(numberToFormat: number): string {
  return numberToFormat < 10 ? `0${numberToFormat}` : numberToFormat.toString();
}

function getDiffInTimeFormat(target: Date, current: Date): any {
  const diff = getDiffInMiliseconds(target, current);
  return convertMilisecondsToTime(diff);
}

function getDiffInMiliseconds(target: Date, current: Date): number {
  return Math.abs(target.getTime() - current.getTime());
}

function convertMilisecondsToTime(duration: number): any {
    var seconds = Math.floor((duration / 1000) % 60);
    var minutes = Math.floor((duration / (1000 * 60)) % 60);
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    var days = Math.floor(duration / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  export {
    formatToTwoDigits,
    getDiffInTimeFormat
  }
