import email from 'react-native-email';

export const sendMail = () => {
  const to = 'emin.proger@gmail.com';
  email(to, {
    subject: 'titles.MAIL_SUBJECT',
    body: 'titles.MAIL_BODY',
  }).catch(console.error);
};
