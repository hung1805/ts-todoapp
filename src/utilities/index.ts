export function formatTime(timeInNumber: number) {
  let result: string = '';
  const temp = new Date(timeInNumber);
  result += temp.getDate() + '-' + temp.getMonth() + '-' + temp.getFullYear();
  return result;
}
export function validateDay(day: Date | undefined) {
  if (!day) return false;
  else {
    const dayNumber = new Date(day);
    if (day < dayNumber) {
      return false;
    }
  }
  return true;
}
