import sendEmail from '../service/nodemailer.js';
import deleteFile from '../utils/deleteFile.js';

const handleErrorResponse = (res, error, statusCode) => {
  console.error(error);
  res.status(statusCode).send('Internal Server Error');
};

const applyController = {
  create: async (req, res) => {
    const { mailContent, companyEmail, subject } = req.body;
    const file = req.file;
    const filePath = file.path;
    try {
      const text = 'Hello User';
      const data = {
        html: mailContent,
        to: companyEmail,
        text: text,
        subject: subject,
        attachments: [
          {
            filename: file.originalname,
            path: filePath,
          },
        ],
      };
      await sendEmail(data);
      deleteFile(filePath);
      return res.send('Applied successfully');
    } catch (error) {
      handleErrorResponse(res, error, 500);
    }
  },
};

export default applyController;
