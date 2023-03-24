import { useForm } from 'react-hook-form';
import { ContactFormValues } from '../../types/forms';
import { validateEmail } from '../../util/functions';
import { TextInputField } from '../common/Form/TextInputField';

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const {
    control,
    handleSubmit,
    formState: {
      errors: { email, name, message, mobileNo, subject },
    },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      mobileNo: '',
      message: '',
      subject: '',
    },
  });
  const onSubmit = (data: ContactFormValues) => console.log('contact-us', data);
  return (
    <form className="mt-10 p-5 shadow-xl rounded-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2">
        <TextInputField
          name="name"
          label="Name"
          placeholder="Your Name"
          control={control}
          error={name?.message}
        />
        <TextInputField
          name="mobileNo"
          label="Mobile No"
          placeholder="Your Mobile No"
          control={control}
          rules={{
            minLength: {
              value: 11,
              message: 'Phone Number must be 11 characters',
            },
          }}
          error={mobileNo?.message}
        />
      </div>

      <TextInputField
        name="email"
        label="Email"
        placeholder="Your Email"
        control={control}
        error={email?.message}
        rules={{
          validate: {
            value: (v) => validateEmail(v),
          },
        }}
      />
      <TextInputField
        name="subject"
        label="Subject"
        placeholder="Your Subject"
        control={control}
        error={subject?.message}
      />
      <TextInputField
        name="message"
        label="Message"
        placeholder="Your Message"
        textarea
        control={control}
        error={message?.message}
      />

      <button type="submit" className="btn-primary text-white px-12 text-lg py-2 mt-4 mx-4">
        Submit
      </button>
    </form>
  );
};
