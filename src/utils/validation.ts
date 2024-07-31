export const IranMobileNumber = (phoneNumber: string): boolean => {
    const regex = /^09\d{9}$/;
    return regex.test(phoneNumber);
  };