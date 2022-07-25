export function formatTime(timeInNumber: number) {
  let result: string = '';
  const temp = new Date(timeInNumber);
  result += temp.getDate() + '-' + temp.getMonth() + '-' + temp.getFullYear();
  return result;
}
