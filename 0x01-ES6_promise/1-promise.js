export default function (boolean) {
  return new Promise((res, reject) => {
    const object = {
      status: 200,
      body: 'Success',
    };

    if (boolean === true) {
      res(object);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
