import sg from '@sendgrid/mail'
sg.setApiKey(import.meta.env.SENDGRID_KEY)

export const send = (list: Array<string>, msg: string, subject: string) => {
  return new Promise((resolve, reject) => {
    sg.send({
      to: list,
      from: import.meta.env.SENDGRID_EMAIL,
      subject,
      html: msg
    })
      .then(() => resolve(true))
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}
