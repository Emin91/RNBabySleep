import email from 'react-native-email';
import titles from '../../../constants/string';

export const sendMail = () => {
  const to = titles.BLOCK_MY_MAIL;
  email(to, {
    subject: '',
    body: '',
  }).catch(console.error);
};
