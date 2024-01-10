import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LoginPage from './LoginPage';

test('renders LoginPage without errors', () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
  );
});

test('handles user input correctly', () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
  );

  const emailInput = screen.getByPlaceholderText(
    'example@gmail.com',
  ) as HTMLInputElement;

  const passwordInput = screen.getByPlaceholderText(
    '******',
  ) as HTMLInputElement;

  fireEvent.change(emailInput, { target: { value: 'admin@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'admin123' } });

  expect(emailInput.value).toBe('admin@gmail.com');
  expect(passwordInput.value).toBe('admin123');
});

test('submits the form correctly', () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
  );

  const submitButton = screen.getByText('Log-in');

  fireEvent.click(submitButton);
});

test('displays validation errors correctly', async () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
  );

  expect(screen.getByText('Log-in')).toBeInTheDocument();

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
