<script setup>
import { ref } from "vue";
import { useCustomerStore } from "@/stores/customerStore";
import { VueFinalModal } from "vue-final-modal";
import IconBack from "./IconBack.vue";
import states from "../assets/data/states.json";
import { VueEditor } from "vue3-editor";

const { addCustomer, updateCustomer } = useCustomerStore();

const props = defineProps({
  edit: Boolean,
  index: {
    type: Number,
    default: null,
  },
  customer: {
    type: Object,
    default: null,
  },
});

const emits = defineEmits(["confirm"]);

const newCustomer = ref(
  props.edit && props.customer
    ? props.customer
    : {
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        state: null,
        status: null, // Active or Inactive
        about: ` <p>I'm running Tiptap with Vue.js. 🎉</p>`,
      }
);

const submitData = () => {
  if (props.edit) {
    updateCustomer(props.index, newCustomer.value);
  } else {
    addCustomer(newCustomer.value);
  }
  emits("confirm");
};
</script>

<template>
  <VueFinalModal
    class="flex h-full w-full justify-center items-center"
    content-class="relative bg-gray-100 border rounded-md max-h-dvh w-full max-w-lg min-h-[300px]"
    overlay-class="bg-background/80 backdrop-blur-sm"
    :overlayTransition="'vfm-fade'"
    :contentTransition="'vfm-slide-down'"
    :clickToClose="true"
  >
    <div class="relative w-full flex flex-col p-5 h-full overflow-y-auto">
      <div class="flex justify-between items-center mb-5">
        <button
          @click="$emit('confirm')"
          class="text-black flex items-center gap-5"
        >
          <IconBack class="w-5 h-5" /> <span>Back</span>
        </button>
      </div>

      <form
        @submit.prevent="submitData()"
        class="p-5 flex flex-col bg-white rounded-md h-fit overflow-y-auto"
      >
        <h1 class="text-lg font-semibold">
          {{ edit ? "Edit" : "Create" }} Customer
        </h1>

        <!-- Scrollable container for input fields -->
        <div class="flex-grow h-[60dvh] overflow-y-auto pr-2.5 optionGrp">
          <div class="doubleInput">
            <div class="inputHolder">
              <label for="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                v-model="newCustomer.firstName"
                class=""
              />
            </div>
            <div class="inputHolder">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                v-model="newCustomer.lastName"
                class=""
              />
            </div>
          </div>

          <div class="doubleInput">
            <div class="inputHolder">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="newCustomer.email"
                class=""
              />
            </div>
            <div class="inputHolder">
              <label for="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                v-model="newCustomer.phone"
                class=""
              />
            </div>
          </div>

          <div class="doubleInput">
            <div class="inputHolder">
              <label for="state">State</label>
              <select id="state" v-model="newCustomer.state" class="">
                <option v-for="state in states" :key="state" :value="state">
                  {{ state }}
                </option>
              </select>
            </div>
            <div class="inputHolder">
              <label for="status">Status</label>
              <select id="status" v-model="newCustomer.status" class="">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div class="mt-5">
            <label for="about">About</label>
            <VueEditor
              v-model="newCustomer.about"
              :editorOptions="{ placeholder: 'About' }"
            />
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-5 mt-5">
          <button
            type="submit"
            class="bg-mainColor disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-1/2 px-3 py-2 rounded text-sm text-white text-center"
          >
            {{ edit ? "Update" : "Create" }}
          </button>
          <button
            type="button"
            @click="$emit('confirm')"
            class="bg-transparent hover:bg-red-600 border hover:text-white duration-75 w-full sm:w-1/2 px-3 py-2 rounded text-sm text-center"
          >
            Discard
          </button>
        </div>
      </form>
    </div>
  </VueFinalModal>
</template>

<style scoped>
.optionGrp::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.optionGrp:hover::-webkit-scrollbar-thumb {
  background-color: #d6d6d7;
}

.optionGrp::-webkit-scrollbar-thumb {
  background-color: hsla(240,1%,84%,0);
  border-radius: 6px;
}

.optionGrp::-webkit-scrollbar-track {
  background-color: hsla(0,0%,94%,0);
  border-radius: 6px;
}
</style>