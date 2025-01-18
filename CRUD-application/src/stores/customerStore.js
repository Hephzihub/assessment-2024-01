import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { toast } from "vue3-toastify";
export const useCustomerStore = defineStore('customers', () => {

  // Define the customer data structure.
  const customers = ref([]);

  // Make the data searchable by email, both name, phone, state, and status(if search query is active return true).
  const query = ref('');
  const filteredCustomers = computed(() => {
    return customers.value.filter(customer => {
      return customer.email.toLowerCase().includes(query.value.toLowerCase()) ||
        customer.firstName.toLowerCase().includes(query.value.toLowerCase()) ||
        customer.lastName.toLowerCase().includes(query.value.toLowerCase()) ||
        customer.phone.toLowerCase().includes(query.value.toLowerCase()) ||
        customer.state.toLowerCase().includes(query.value.toLowerCase()) ||
        (customer.status  ? 'active' : 'inactive').includes(query.value.toLowerCase())
    })
  })


  // Actions to manipulate the customer data.

  // update a customer
  function updateCustomer(index, customer) {
    customers.value[index] = customer;
    toast.success("User Updated Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  // add a new customer
  function addCustomer(customer) {
    customers.value.push(customer);
    toast.success("User Added Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  // delete a customer
  function deleteCustomer(index) {
    customers.value.splice(index, 1)
    toast.success("User Deleted Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  return { query, filteredCustomers, updateCustomer, addCustomer, deleteCustomer }

})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCustomerStore, import.meta.hot));
}