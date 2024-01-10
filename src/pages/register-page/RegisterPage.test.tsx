import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import RegisterPage from './RegisterPage';

test('renders RegisterPage without errors', () => {
  render(
    <BrowserRouter>
      <RegisterPage />
    </BrowserRouter>,
  );
});

test('handles user input correctly', () => {
  render(
    <BrowserRouter>
      <RegisterPage />
    </BrowserRouter>,
  );

  const usernameInput = screen.getByPlaceholderText('User') as HTMLInputElement;

  const emailInput = screen.getByPlaceholderText(
    'example@gmail.com',
  ) as HTMLInputElement;

  const passwordInput = screen.getByPlaceholderText(
    '******',
  ) as HTMLInputElement;

  fireEvent.change(usernameInput, { target: { value: 'admin' } });
  fireEvent.change(emailInput, { target: { value: 'admin@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'admin123' } });

  expect(usernameInput.value).toBe('admin');
  expect(emailInput.value).toBe('admin@gmail.com');
  expect(passwordInput.value).toBe('admin123');
});

test('submits the form correctly', () => {
  render(
    <BrowserRouter>
      <RegisterPage />
    </BrowserRouter>,
  );

  const submitButton = screen.getByText('Sign-up');

  fireEvent.click(submitButton);
});

test('displays validation errors correctly', async () => {
  render(
    <BrowserRouter>
      <RegisterPage />
    </BrowserRouter>,
  );

  expect(screen.getByText('Sign-up')).toBeInTheDocument();

  const usernameInput = screen.getByPlaceholderText('User') as HTMLInputElement;

  const emailInput = screen.getByPlaceholderText(
    'example@gmail.com',
  ) as HTMLInputElement;

  const passwordInput = screen.getByPlaceholderText(
    '******',
  ) as HTMLInputElement;

  fireEvent.change(emailInput, { target: { value: 'admingmail.com' } });
  fireEvent.blur(emailInput);

  fireEvent.change(passwordInput, { target: { value: 'ad12' } });
  fireEvent.blur(passwordInput);

  await waitFor(() => {
    expect(screen.getByText('Must contain @')).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText('Minimum 5 characters')).toBeInTheDocument();
  });

  fireEvent.change(emailInput, { target: { value: '' } });
  fireEvent.blur(emailInput);

  await waitFor(() => {
    expect(screen.getByText('Complete this field')).toBeInTheDocument();
  });

  fireEvent.change(passwordInput, { target: { value: '' } });
  fireEvent.blur(passwordInput);

  await waitFor(() => {
    expect(screen.getByText('Complete this field')).toBeInTheDocument();
  });
});
