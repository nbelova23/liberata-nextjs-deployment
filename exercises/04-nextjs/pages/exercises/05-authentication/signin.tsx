import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';

function useForm(initialValues: any, validate?: (values: any) => any) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (onSubmit: any) => (e: any) => {
    e.preventDefault();

    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) return;
    }

    onSubmit(values);
  };

  return { values, errors, handleChange, handleSubmit };
}

function FormField({ label, name, type, value, error, onChange }: any) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>

      <input
        className="w-full p-2 border rounded"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}


function validate(values: any) {
  const errors: any = {};

  if (!values.email) errors.email = 'Email required';
  if (!values.password) errors.password = 'Password required';

  return errors;
}

export default function SignIn() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    validate
  );


    const { login } = useContext(AuthContext);

    const onSubmit = (values: any) => {
        console.log('Logged in:', values);

        login(); // ✅ THIS is the key

        alert('Login successful!');
    };


  return (
    <div className="max-w-md mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
        />

        <FormField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          error={errors.password}
          onChange={handleChange}
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}