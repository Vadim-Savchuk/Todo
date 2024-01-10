export const passwordConfig = {
  required: 'Complete this field',
  minLength: {
    value: 5,
    message: 'Minimum 5 characters',
  },
};

export const emailConfig = {
  required: 'Complete this field',
  minLength: {
    value: 5,
    message: 'Minimum 5 characters',
  },
  pattern: {
    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    message: 'Must contain @',
  },
};
