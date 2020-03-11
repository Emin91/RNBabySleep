import titles from '../../../constants/string';
import email from 'react-native-email';

const SendMail = () => {
  const to = 'emin.proger@gmail.com';
  email(to, {
    subject: titles.MAIL_SUBJECT,
    body: titles.MAIL_BODY,
  }).catch(console.error);
};
export default SendMail;
