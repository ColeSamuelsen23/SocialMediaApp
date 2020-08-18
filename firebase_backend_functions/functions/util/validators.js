const isEmpty = string => {
  if (string.trim() === "") return true;
  else return false;
};

exports.reduceUserDetails = data => {
  let userDetails = {};

  if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;

  if (!isEmpty(data.location.trim())) userDetails.location = data.location;

  return userDetails;
};
