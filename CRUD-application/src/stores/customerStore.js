import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
export const useCustomerStore = defineStore('customers', () => {

  // Define the customer data structure.
  const customers = ref([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@mailer.com',
      phone: '123-456-7890',
      state: 'New York',
      status: 'Active', // or Inactive
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies.'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@mailer.com',
      phone: '123-456-7890',
      state: 'New York',
      status: 'Active', // or Inactive
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies.'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@mailer.com',
      phone: '123-456-7890',
      state: 'New York',
      status: 'Active', // or Inactive
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies.'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@mailer.com',
      phone: '123-456-7890',
      state: 'New York',
      status: 'Active', // or Inactive
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies.'
    },
  ]);

  // Make the data searchable by email, both name, phone, state, and status.
  const query = ref('')
  const filteredCustomers = computed(() => {
    return customers.value.filter(customer => {
      return customer.email.toLowerCase().includes(query.value.toLowerCase()) ||
        customer.firstName.toLowerCase().includes(query.value.toLowerCase()) ||
        customer.lastName.toLowerCase().includes(query.value.toLowerCase()) ||
        customer.phone.toLowerCase().includes(query.value.toLowerCase()) ||
        customer.state.toLowerCase().includes(query.value.toLowerCase()) ||
        customer.status.toLowerCase().includes(query.value.toLowerCase())
    })
  })

  // Actions to manipulate the customer data.

  // update a customer
  function updateCustomer(index, customer) {
    customers.value[index] = customer
  }

  // add a new customer
  function addCustomer(customer) {
    customers.value.push(customer)
  }

  // delete a customer
  function deleteCustomer(index) {
    customers.value.splice(index, 1)
  }

  return { query, filteredCustomers, updateCustomer, addCustomer, deleteCustomer }

})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCustomerStore, import.meta.hot));
}