import * as FormData from 'form-data'
import Mailgun from 'mailgun.js'

const mailgun = new Mailgun(FormData)
export const mg = mailgun.client({
  username: import.meta.env.MAILGUN_USERNAME,
  key: import.meta.env.MAILGUN_API_KEY
})

export const send = (list, msg, subject) => {
  return new Promise((resolve, reject) => {
    mg.messages
      .create('jc@hackclub.com', {
        bcc: list,
        subject,
        html: msg
      })
      .then(msg => resolve(msg))
      .catch(err => reject(err))
  })
}
