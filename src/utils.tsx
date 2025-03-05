export const getTimeDifference = (publishedAt: string) => {
  const timestamp = new Date(publishedAt);
  const currentTime = new Date();
  const timeDifference: number = currentTime.getTime() - timestamp.getTime();
  let hoursDifference: number = timeDifference / (1000 * 60 * 60);
  hoursDifference = Math.ceil(hoursDifference - 24);
  if (hoursDifference < 24) {
    return hoursDifference + " hours ago";
  } else {
    return hoursDifference / 24 + " day ago";
  }
};
