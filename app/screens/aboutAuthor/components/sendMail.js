import email from 'react-native-email';

export const sendMail = () => {
  const to = 'emin@wizardsdev.com';
  email(to, {
    subject: '',
    body: '',
  }).catch(console.error);
};
