export const validateCustomer = (customer) => {
  const errors = {};

  // Check required fields
  if (!customer.firstName) errors.firstName = 'First name is required';
  if (!customer.lastName) errors.lastName = 'Last name is required';
  if (!customer.email) errors.email = 'Email is required';
  if (!customer.phone) errors.phone = 'Phone number is required';
  if (!customer.state) errors.state = 'State is required';
  if (!customer.about) errors.about = 'About is required';

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (customer.email && !emailPattern.test(customer.email)) {
    errors.email = 'Invalid email address';
  }

  // Validate phone number for Nigeria
  const phonePattern = /^(070|080|081|090|091)\d{8}$/;
  if (customer.phone && !phonePattern.test(customer.phone)) {
    errors.phone = 'Invalid phone number';
  }

  return errors;
};