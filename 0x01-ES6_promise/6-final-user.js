import signUpUser from './4-all-reject';
import uploadPhoto from './5-all-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const arr = [];
  try {
    const user = await signUpUser(firstName, lastName);
    arr.push({ status: 'fulfilled', value: user });
    await uploadPhoto(fileName);
  } catch (err) {
    arr.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }
  return arr;
}
